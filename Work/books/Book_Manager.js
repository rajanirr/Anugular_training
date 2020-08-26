let {searchAll} = require('./utils');

    function Books(id,title,coverPageUrl,author,price,rating){
    this.id=id;
    this.title=title;
    this.coverPageUrl=coverPageUrl;
    this.author=author;
    this.price=price;
    this.rating=rating;
    this.toString= function(){
        return `Books[id=${this.id}\tTitle=${this.title}\tautor=${this.author}\tcoverpageUrl=${this.coverPageUrl}\tprice=${this.price}\trating=${this.rating}]`;
    }
    }
    
    function BooksManager(){
        let books=[];
           
        this.addBooks=function(...args){
            //if(Books && Books.id && Books.name )
            books.push(new Books(...args));
        }
       this.getAllBooks= async function(){
            return Promise.resolve(books);
        }
        this.getById= async function(id){
			
            for(let book of books)
                if (book.id==id){
                    return Promise.resolve(book);
                }
        
            return Promise.reject('Not found.!');
        }
        
         
         this.searchAuthorByName= async function(Name){
            if(this.author==Name){
                return Promise.resolve(books);
            }
            return Promise.reject('Not found by Name.!');
         }
         
         this.remove=function(id){
            this.books= search(this.books, a=> a.id!==id);
        }
        

        this.search=function(isMatch){
            return Promise.resolve(searchAll(this.authors, isMatch));
          
        }

        this.remove=function(id){
            this.books= search(this.books, a=> a.id!==id);
        }
    }
    let booksManger=new BooksManager();
    booksManger.addBooks(1,'Raju','test','author1','100','4.5');
    booksManger.addBooks(2,'Rajani','test','author2','101','5');
    //console.log(booksManger.addBooks(1,'Raju','test','author1','100','4.5'));
   console.log(booksManger.getAllBooks());
	booksManger.getById(1).then(obj=>console.log(obj)).catch(e=>console.log(e));
    booksManger.getById(3).then(obj=>console.log(obj)).catch(e=>console.log(e));
    booksManger.searchAuthorByName('author2').then(obj=>console.log(obj)).catch(e=>console.log(e)) ; 
