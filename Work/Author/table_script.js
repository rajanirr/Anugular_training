function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
	
 var id=document.getElementById("name_row"+no);
 var name=document.getElementById("country_row"+no);
 var biography=document.getElementById("age_row"+no);
 var email=document.getElementById("email_row"+no);
 var books=document.getElementById("list_row"+no);
	
 var author_id=id.innerHTML;
 var author_name=name.innerHTML;
 var author_biography=biography.innerHTML;
 var author_email=email.innerHTML;
 var author_books=books.innerHTML;
 
 id.innerHTML="<input type='text' id='id_text"+no+"' value='"+author_id+"'>";
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+author_name+"'>";
 biography.innerHTML="<input type='text' id='biography_text"+no+"' value='"+author_biography+"'>";
 email.innerHTML="<input type='text' id='email_text"+no+"' value='"+author_email+"'>";
 books.innerHTML="<input type='text' id='books_text"+no+"' value='"+author_books+"'>";
}

function save_row(no)
{
 var id_val=document.getElementById("id_text"+no).value;
 var name_val=document.getElementById("name_text"+no).value;
 var biography_val=document.getElementById("biography_text"+no).value;
 var email_val=document.getElementById("email_text"+no).value;
 var books_val=document.getElementById("books_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=id_val;
 document.getElementById("country_row"+no).innerHTML=name_val;
 document.getElementById("age_row"+no).innerHTML=biography_val;
 document.getElementById("email_row"+no).innerHTML=email_val;
 document.getElementById("books_row"+no).innerHTML=books_val;
 
 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
    var new_id=document.getElementById("new_id").value;
 var new_name=document.getElementById("new_name").value;
 var new_biography=document.getElementById("new_biography").value;
 var new_email=document.getElementById("new_email").value;
 var new_books=document.getElementById("new_books").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_id+"</td><td id='country_row"+table_len+"'>"+new_name+"</td><td id='age_row"+table_len+"'>"+new_biography+"</td><td id='email_row"+table_len+"'>"+new_email+"</td><td id='list_row"+table_len+"'>"+new_books+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_country").value="";
 document.getElementById("new_age").value="";
}