---
title: Publisher e Writer in Jolie
image: https://source.unsplash.com/random
slug: appunti-jolie-publisher-writer
categories: teaching
published: true
language: italian

---

# Publisher e Writer in Jolie

Per creare una comunicazione tra un _publisher_ - un servizio che vuole pubblicare un contenuto - ed un _writer_ - un servizio che ha la capacità di scrivere su un una risorsa - creaiamo, per prima cosa, l'interfaccia di comunicazione.

```java
interface IWriter {
    RequestResponse:
        write( string )( void )
}
```

Assumiamo che la risorsa sia un file e che il contenuto sia una stringa arbitraria inviata dal _publisher_. Il servizio _writer_ espone l'interfaccia `IWriter` attraverso una opportuna `InputPort` ed implementa il comportamento di `write`.

Invocheremo l'avvio del servizio _writer_ con il seguente comando da shell:

```bash
jolie writer.ol <nome_file>
```

## La risorsa <nome_file>

Nel comando sopra, il `<nome_file>` rappresenta l'indirizzo (il _path_) **opzionale** della risorsa su cui il _writer_ scrive. In questo modo possiamo rendere più dinamico il comportamento del sistema permettendo ad ogni servizio _writer_ - sì, possiamo avviare più servizi _writer_ - di decidere su quale file scrivere.
All'interno del servizio _writer_ possiamo utilizzare questo valore per definire una **variabile globale**, che ogni operazione di _writer_ - anche se per adesso ne abbiamo una sola - può usare 
Dobbiamo però fare attenzione che la `Location` di ogni `InputPort` sia univoca, il che significa che dovremo cambiare, per ciascun _writer_, almeno la porta. Ad esempio, se la `Location` del primo _writer_ che abbiamo avviato è `"socket://127.0.0.1:1999"` allora il secondo _writer_ potrebbe avere `Location:"socket://127.0.0.1:2000"` e così via.

Possiamo implementare la definizione dinamica della porta di ascolto grazie alle [`constants` (constanti) di Jolie](https://jolielang.gitbook.io/docs/language-tools-and-standard-library/basics/constants).
Una costante non è altro che un nome al quale viene associato un valore fisso, non mutabile nel corso durante l'esecuzione del servizio.

La sintassi per definire la costante `WRITER_LOCATION`, potrebbe essere la seguente:

```json
constants {
    WRITER_LOCATION = "socket://127.0.0.1:1999"
}
```

Il servizio _worker_ può ora essere avviato cambiando l'indirizzo della `Location` grazie alla sovrascrittura della costante

```bash
jolie -C "WRITER_LOCATION=\"socket://127.0.0.1:1999\"" writer.ol <nome_file>
```

## Gestire richieste concorrenti

L'implementazione di _writer_ dovrà certamente tenere conto di possibili richieste concorrenti da parte di più servizi _publisher_ per scrivere su una stessa risorsa (si pensi ad un semplice sistema di _chat_ pubblica).
Nel nostro caso il rischio è quello di incorrere in una eccezione nella richiesta di scrittura sul file. In Jolie questo risulterebbe in un errore nella classe che gestisce il **Thread** di scrittura:

```java
Exception in thread "Thread-31" 
Exception in thread "Thread-18" 
java.util.concurrent.RejectedExecutionException: 
    Task jolie.net.AbstractCommChannel$ResponseReceiver$1@797e1208 rejected from java.util.concurrent.ThreadPoolExecutor@3c7c8343
```

La parte del messaggio che ci interessa è quella relativa all'eccezione sollevata dal nostro interprete, e cioè `java.util.concurrent.RejectedExecutionException`. Evidentemente la gestione delle richieste concorrenti non è adeguata e dovremo ricorrere ad un costrutto specifico del linguaggio Jolie per gestire l'accesso alla risorsa: si tratta senza dubbio di `synchonized`
