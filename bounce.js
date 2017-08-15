		
		$('div#button').bind('click', bounce_ball);		
	
		function bounce_ball(){	
			function loputa(){ 
		$('div#button').unbind();
				$("span.left").addClass('leftRotate');
				$("span.right").addClass('rightRotate');
			
			} /* end of loputa */

			function fedra(){
			$("div#fedra").css('display', 'block');
			$("div#fedra").animate({"margin-top" : "625px"},80);
							
			$("div#sen1").animate({"margin-top" : "-70px"}, 170);
			$("div#sen1").animate({"margin-top" : "-55px"}, 280, function(){

			$("div#sen1").animate({"margin-top" : "-70px"}, 130);
			
			$("div#sen1.d").css({ transition: "transform 0.28s", transform: "rotate(" + 16 + "deg)"});
			$("div#sen1.c").css({ transition: "transform 0.28s", transform: "rotate(" + 26 + "deg)"});
			$("div#sen1.b").css({ transition: "transform 0.28s", transform: "rotate(" + 29 + "deg)"});
			$("div#sen1.a").css({ transition: "transform 0.28s", transform: "rotate(" + 39 + "deg)"});
			$("div#sen1.d").animate({"margin-left":"3px"}, 100);
			$("div#sen1.c").animate({"margin-left":"10px"}, 100);
			$("div#sen1.b").animate({"margin-left":"21px"},100);
			$("div#sen1.a").animate({"margin-left":"37px"}, 100);			
			
			}); 
			
			} /* end of fedra */
		
			function zogica(){	
			$("div#box1").css({ transition: "transform 1.2s", transform: "rotate(" + -460 + "deg)" });		
			$("div#box1").css({'margin-top': '-220px'});
						
			$("div#box1").animate({"margin-left": "937px"},{ duration: 1800, queue: false})
						 .animate({"margin-top":"-637px"}, 600, function(){
				$("div#box1").animate({"margin-top":"50px"},500, function(){
					$("div#box2").addClass('colorado');
					$("div#box1").css({ transition: "transform 0.7s", transform: "rotate(" + 20 + "deg)"});	
								
				});
			});
	
		} /* end of zogica */

		

			loputa();	
			setTimeout(fedra, 200);
			setTimeout(zogica, 200);



		function rotolandoBack(){
			$("div#box1").css({ transition: "transform 1.8s", transform: "rotate(" + -1860 + "deg)" });
			$("div#box1").animate({"margin-left": "25px", "margin-top":"25px"},1800);
	
			function aPrejFedraDol(){
				$("div#sen1").css({ transition: "transform 0.08s", transform: "rotate(" + 0 + "deg)"});
				$("div#sen1").animate({"margin-left":"0px"}, 80, function(){
						$("div#sen1").animate({"margin-top":"-55px"}); 	
				});
				$("div#fedra").animate({"margin-bottom" : "115px"},420, function(){
				$("div#fedra").removeAttr('style');	
			});
			}
			setTimeout(aPrejFedraDol, 800);	
			function loputeSapira(){	
			$("span.left").addClass('leftPrev');
			$("span.right").addClass('rightPrev');
			}	
			setTimeout(loputeSapira, 1700);	


			function resetDomStyles(){
			$("div#sen1").removeAttr('style');
			$("div#box1").removeAttr('style');
			$("span.left").removeClass('leftRotate leftPrev');
			$("span.right").removeClass('rightRotate rightPrev');
			$('div#button').bind('click', bounce_ball);
		}

			setTimeout(resetDomStyles, 2200);	
	

	
		} /* end of rotolandoBack */

		setTimeout(rotolandoBack, 3900);


	
			} /* end of bounce_ball */


	




