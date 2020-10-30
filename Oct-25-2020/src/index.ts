class Televison {
    moviesList : Array<string>;
    index : number;

    constructor(){
        this.index = 0,
        this.moviesList = [
            'https://www.youtube.com/embed/kJQP7kiw5Fk',
            'https://www.youtube.com/watch?v=7wtfhZwyrcc',
            'https://www.youtube.com/watch?v=JGwWNGJdvx8',
            'https://www.youtube.com/watch?v=ij_0p_6qTss'
        ];
    }

    play() {
        let item = <HTMLIFrameElement>document.getElementById('ytplayer');
        item.src = this.moviesList[this.index];
    }

    nextSong(): void{
        if(this.index === 3){
            this.index = 0;
            let item = <HTMLInputElement>document.getElementById("n_value");
            item.value = this.moviesList[this.index + 1] ;
            let item2 = <HTMLInputElement>document.getElementById("p_value");
            item2.value = this.moviesList[0] ;
            this.index += 1;
        }else{
            if(this.index == 2){
                this.index += 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.moviesList[0] ;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.moviesList[this.index - 1] ;
            }else{
                this.index += 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.moviesList[this.index + 1] ;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.moviesList[this.index - 1] ;
            }
        }
    }

    prevSong(): void{
        if(this.index === 0){
            this.index = 3;
            let item = <HTMLInputElement>document.getElementById("n_value");
            item.value = this.moviesList[0] ;
            let item2 = <HTMLInputElement>document.getElementById("p_value");
            item2.value = this.moviesList[this.index - 1] ;
        }else{
            if (this.index == 1){
                this.index -= 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.moviesList[this.index + 1] ;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.moviesList[3] ;
            }else{
                this.index -= 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.moviesList[this.index + 1] ;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.moviesList[this.index - 1] ;
            }
        }
    }
}

let tvObj = new Televison();
tvObj.play()

let bw =<HTMLButtonElement>document.getElementById("button_fw")
if(bw){
    bw.addEventListener("click", function() {tvObj.nextSong()});
}

let fw =<HTMLButtonElement>document.getElementById("button_bw")
if(fw){
    fw.addEventListener("click", function() {tvObj.prevSong()})
}

