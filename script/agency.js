(($, window, document, undefined)=>{

    class Agency {
      init(){
        this.header();
        this.section1();
        this.section2();
        this.section3();
        this.section4();
        this.section5();
        this.section6();
        this.section7();
        this.section8();
        this.section9();
        this.section10();
        this.footer();
      }
      header(){ 
        //메인버튼 이벤트
        const mainBtn = $('.main-btn');
        const sub = $('.sub');
        const nav = $('#nav');
        const subBtn = $('.sub-btn');
        const subSub = $('.sub-sub');
  
              //메인메뉴-서브메뉴
              mainBtn.on({
                mouseenter(e){
                  const $this = $(this);
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                },
                focusin(e){
                  const $this = $(this);
                        sub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                }
              });
  
              nav.on({
                mouseleave(){
                  sub.stop().fadeOut(300);
                  subSub.stop().fadeOut(300);
                }
              });
              subBtn.on({
                mouseenter(){
                  const $this = $(this);
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                },
                focusin(){
                  const $this = $(this);
                        subSub.stop().fadeOut(0);
                        $this.next().stop().fadeIn(300);
                }
              });
      }
      section1(){
            
            var cnt = 0;
            const slide = $('.slide-wrap');
            const slideView = $('.slide-view');
            let touch1 = null;
            let touch2 = null; 
            let dS = null;  //드래그시작
            let dE = null;  //드래그끝
            let mD = null;  //마우스다운

            function mainSlide(){
                slide.stop().animate({left:-1903*cnt},600,function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slide.stop().animate({left:-1900*cnt},0);
                });
            }
            function nextCount(){
              cnt++;
              mainSlide();
            }
            function prevCount(){
              cnt--;
              mainSlide();
            }
            
            slideView.on({  
              mousedown(event){
                touch1 = event.clientX;
                dS = event.clientX - slideWrap.offset().left-1903;
                mD = true;
              },
              mouseup(event){
                touch2 = event.clientX;
                mD = false;
                if((touch1-touch2) > 0){ 
                  nextCount();
                }
                if((touch1-touch2) < 0){  
                  prevCount();
                }
              },
              mousemove(e){  
                if( mD !== true ){return} 
                dE = e.clientX;
                slideWrap.css({left: dE - dS });
              }
          });
       }
  
      section2(){
  
      }
      section3(){
  
      }
      section4(){
  
      }
      section5(){
  
      }
      section6(){
  
      }
      section7(){
  
      }
      section8(){
  
      }
      section9(){
  
      }
      section10(){
  
      }    
      footer(){
  
      }
    }
  
    const newAgency =  new Agency();
    newAgency.init();
  
  })(jQuery, window, document);