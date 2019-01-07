$( 'p' ).addClass( "text-body text-justify" );
$( 'a' ).each( function() {
  $( this ).addClass( "text-dark" );
  var a = new RegExp( '/' + window.location.host + '/' );
  if ( !a.test( this.href ) ) {
    $( this ).attr( "target", "_blank" );
  }
});
$( 'table' ).addClass( "table" );
