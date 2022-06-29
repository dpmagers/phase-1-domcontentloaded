// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

document.addEventListener("DOMContentLoaded", function(){
  const p = document.getElementById('text');
  p.textContent = "This is really cool!"
})



// describe( "index.js", () => {
//   it( 'should change the text on the page when DOM content has loaded', function () {
//     expect( document.querySelector( 'p' )
//         .textContent )
//       .to.equal( "JavaScript is so cool. It lets me add text to my page programmatically." );

//     const event = document.createEvent( 'Event' );
//     event.initEvent( 'DOMContentLoaded', true, true );
//     window.document.dispatchEvent( event );

//     expect( document.querySelector( 'p' )
//         .textContent )
//       .to.equal( "This is really cool!" );
//   } )

// } )