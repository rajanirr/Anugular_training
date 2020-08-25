function Author(id,name,biography,dob,email,photographUrl,books=[]){
    this.id=id;
    this.name=name;
    this.biography=biography;
    this.dob=dob;
    this.email=email;
    this.photographUrl=photographUrl;
    this.books=books;
    this.toString= function(){
        return `Author[id=${this.id}\tname=${this.name}\tbiography=${this.biography}\tdob=${dob}]`;
    }
    }
    function Book(id,title,coverPageUrl,author,price,rating){
    this.id=id;
    this.title=title;
    this.coverPageUrl=coverPageUrl;
    this.author=author;
    this.price=price;
    this.rating=rating;
    }
    
    function AutherManager(){
        let authors=[];
       
    
        this.addAuthor=function(...args){
            authors.push(new Author(...args));
        }
       this.getAllAuthers= function(){
            return authors;
        }
        this.searchByBookID=function(ID){
            for(var i=0;i< Book.length;i++){
                if(Book.ID==ID){
                    console.log(Book[i].title);
                    print(Book[i].title);
                }
            }
        }
    
      
        this.searchAuthorByName=function(Name){
            if(this.name==Name){
                return authors;
            }

         }
    
    }
    let authorManger=new AutherManager();
    authorManger.addAuthor(1,'Raju','test','10-10-1970','raju@test.com','http://raju.com');
    authorManger.addAuthor(2,'Rajani','test','10-10-1970','rajani@test.com','http://rajani.com');
    console.log(authorManger.getAllAuthers());
    let a1=new authorManger.searchAuthorByName('book24444');
    console.log(`${a1}`);
    console.log(authorManger.searchByBookID('2'));
