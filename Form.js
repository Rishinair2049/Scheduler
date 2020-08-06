class Form{
    constructor(){
        this.mailId = createInput('email');
        this.submitButton = createButton('submit');
        this.title = createElement('h2');
        this.todayD = createButton('today');
        this.tommorowD = createButton('tommorow');
        this.schedule = createButton('schedule');
        this.scheduleD = createElement('h2');
        this.scheduleD.hide();
        this.schedule.hide();
        this.td = createElement('h3');
        this.h1 = createButton('8:00 am');
        this.h2 = createButton('9:00 am');
        this.h3 = createButton('10:00 am');
        this.h4 = createButton('11:00 am');
        this.h5 = createButton('12:00 pm');
        this.h6 = createButton('1:00 pm');
        this.h7 = createButton('2:00 pm');
        this.h8 = createButton('3:00 pm');
        this.h9 = createButton('4:00 pm');
        this.h10 = createButton('5:00 pm');
        this.h11 = createButton('6:00 pm');
        this.h12 = createButton('7:00 pm');
        this.h13 = createButton('8:00 pm');
        this.h14 = createButton('9:00 pm');
        this.h15 = createButton('10:00 pm');
        this.input = createInput('What to do');
        this.input.style('width:700px');
        this.input.style('height:200px');
        this.h1.hide();
        this.h2.hide();
        this.h3.hide();
        this.h4.hide();
        this.h5.hide();
        this.h6.hide();
        this.h7.hide();
        this.h8.hide();
        this.h9.hide();
        this.h10.hide();
        this.h11.hide();
        this.h12.hide();
        this.h13.hide();
        this.h14.hide();
        this.h15.hide();
        this.input.hide();
        this.todayD.hide();
        this.tommorowD.hide();
        this.td.hide();
    }

    display(){
        this.mailId.position(displayWidth/2 - 50, displayHeight/2 - 80);
        this.title.html("Scheduler");
        this.title.position(displayWidth/2 - 30,0);
        this.submitButton.position(displayWidth/2, displayHeight/2);

        this.submitButton.mousePressed(()=>{
            c = 1;
            this.mailId.hide();
            this.submitButton.hide();
            user.email = this.mailId.value();
            userCount = userCount + 1;
            user.num = userCount;
            user.update();
            user.updateCount(userCount);
            this.todayD.show();
            this.tommorowD.show();
            this.td.show();
            this.tommorowD.position(700,100);
            this.todayD.position(700,250);
            this.td.html(time.date);
            this.td.position(700,270);
        })
        this.todayD.mousePressed(()=>{
            c = 2;
            this.todayD.hide();
            this.tommorowD.hide();
            this.td.hide();
            this.h1.show();
            this.h2.show();
            this.h3.show();
            this.h4.show();
            this.h5.show();
            this.h6.show();
            this.h7.show();
            this.h8.show();
            this.h9.show();
            this.h10.show();
            this.h11.show();
            this.h12.show();
            this.h13.show();
            this.h14.show();
            this.h15.show();
            this.h1.position(200,100);
            this.h2.position(300,100);
            this.h3.position(400,100);
            this.h4.position(200,200);
            this.h5.position(300,200);
            this.h6.position(400,200);
            this.h7.position(200,300);
            this.h8.position(300,300);
            this.h9.position(400,300);
            this.h10.position(200,400);
            this.h11.position(300,400);
            this.h12.position(400,400);
            this.h13.position(200,500);
            this.h14.position(300,500);
            this.h15.position(400,500);

        })

        this.h1.mousePressed(()=>{
            t = 8;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h2.mousePressed(()=>{
            t = 9;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h3.mousePressed(()=>{
            t = 10;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h4.mousePressed(()=>{
            t = 11;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h5.mousePressed(()=>{
            t = 12;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h6.mousePressed(()=>{
            t = 13;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h7.mousePressed(()=>{
            t = 14;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h8.mousePressed(()=>{
            t = 15;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h9.mousePressed(()=>{
            t = 16;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h10.mousePressed(()=>{
            t = 17;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h11.mousePressed(()=>{
            t = 18;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h12.mousePressed(()=>{
            t = 19;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h13.mousePressed(()=>{
            t = 20;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h14.mousePressed(()=>{
            t = 21;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.h15.mousePressed(()=>{
            t = 22;
            this.h1.hide();
            this.h2.hide();
            this.h3.hide();
            this.h4.hide();
            this.h5.hide();
            this.h6.hide();
            this.h7.hide();
            this.h8.hide();
            this.h9.hide();
            this.h10.hide();
            this.h11.hide();
            this.h12.hide();
            this.h13.hide();
            this.h14.hide();
            this.h15.hide();
            this.input.show();
            this.input.position(350,200);
            this.schedule.show();
            this.schedule.position(650,500);
        })

        this.schedule.mousePressed(()=>{
            var a = this.input.value();
            this.input.hide();
            this.schedule.hide();
            this.scheduleD.show();
            this.scheduleD.html("Your scheduling is done for : "+a);
            this.scheduleD.position(displayWidth/2-300,100);
            if(t === 8 && user.num!= 0){
                this.time1 = t;
                this.msg1 = a;
                user.update();
            }
        })
    }
    
}