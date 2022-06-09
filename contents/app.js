


console.log( "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii" );
console.log($('ytd-comments#comments'));







var commentIndex = 0;



$(document).on('DOMSubtreeModified', async (event) => {

    var arr = $(event.currentTarget).find('yt-formatted-string#content-text').not('.verified');



    if (arr.length > 0) {


        if ($(arr[0]).attr('comment-id') == null) {


            await $(arr[0]).attr('comment-id', commentIndex++ );
            await $(arr[0]).addClass( ''+commentIndex );
            console.log("----------");




            await new Promise( async (resolve, reject) => {
    
                

                await $.ajax({
                    headers: {        
                        "Access-Control-Allow-Origin" : "*",
                        "Access-Control-Allow-Methods":  "GET,HEAD,OPTIONS,POST,PUT",
                        "Access-Control-Allow-Headers":  "Origin, X-Requested-With, Content-Type, Accept",
                        "Access-Control-Allow-Private-Network": "true",
                        "Content-type": "application/json"
                    },
                    
                    type: 'POST',
                    cache: false,
                    xhrFields: { withCredentials: true },
                    url: "http://127.0.0.1:8000/predict",
                    data: {
                        "comment_id": commentIndex,
                        "text": $('.'+commentIndex).text()

                    },
                    dataType: "text",
                    success: function(resultData) { 
                        
                        console.log( resultData );
                    
                    }
                });



                console.log( $('.'+commentIndex).text() );


                


                
                resolve('ok');
            })
            .then((data) => {
                
                $('.'+commentIndex).html();
    
                $('.'+commentIndex).addClass( 'verified' );
            })
    
    
            
            
        
    
            console.log("----------");

        }



    }




});






