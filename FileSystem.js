const readline =require("readline");
const rl =readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const fs=require("fs");

var filename="";
var content="";

var createFile = () =>{
	fs.writeFile(filename,content,(err) => {
		if(err){
			console.log(err);
		}
		else{
			console.log("File created successfully...");
			repeat();
		}
	})
}

var createFileWizard = () => {
	console.log("welcome");	
	rl.question("Enter name of File:",(ans) => {
		filename=ans +".txt";
	rl.question("Contents of the file",(ans) => {
		content=ans;
        //console.log("Filename: "+filename+" Content: "+content);
        createFile();
	})
	});
}

var readToFileWizard = () =>{
    console.log("You want to read a file");
    rl.question("Enter file name want to read:",(ans)=>{
        filename=ans+".txt";
        //console.log(filename);
        fs.readFile(filename,'utf8', (err, ans) => {
            if (err) {
              console.error(err);
              return
            }
            console.log(ans);
            repeat();
          });
        }); 
}

var appendToFileWizard = () =>{
    console.log("You want to append a file?");
    rl.question("Enter file name want to append:",(ans)=>{
        filename=ans+".txt";
   
        rl.question("Enter contend you wnt to append:",(ans)=>{
            content=ans;
            
            fs.appendFile(filename,content,function (err){
                if(err) {
                    console.error(err);
                    return
                }
                console.log(ans);
                console.log("appended successfully...");
                repeat();
            });
        });
    });
   

}
var renameTofileWizard = () =>{
    console.log("enat to rename your filename?");
    rl.question("enter file name you want to rename:",(ans) =>{
        filename=ans+".txt";
        rl.question("Enter file name:",(ans)=>{
            newfilename=ans+".txt";
            fs.rename(filename,newfilename,function (err){
                if(err){
                    console.error(err);
                    return
                }
                console.log(ans);
                console.log(" Renamed successfully...")
                repeat();
            } );
        });
    });
}

var deleteTofileWizard = () =>{
    console.log("Want to Delete a file?");
    rl.question("Enter file name you wnat to delete:",(ans) =>{
        filename=ans+".txt";
    fs.unlink(filename,function(err) {
        if(err){
            console.error(err);
            return
        }
        console.log(ans);
        console.log("deleted successfully");
        repeat();
    });
    });
}

var updateTofileWizard = () =>{
    console.log("Want to update a file\n");
    rl.question("Enter filename you want to update:",(ans)=>{
        filename=ans+".txt";
        rl.question("Enter content you want:",(ans)=>{
            content=ans;
            fs.writeFile(filename,content,function(err) {
                if(err){
                    console.error(err);
                    return
                }
                console.log(ans);
                console.log("updated successfully");
                repeat();
            });
        });
    });
}

var instruction = () => {
	console.log("Enter 1 to Create a new file");		
	console.log("Enter 2 to Read a file");		
	console.log("Enter 3 to Append a file");		
	console.log("Enter 4 to Update content of a file");
    console.log("Enter 5 to Rename a file");	
	console.log("Enter 6 to Delete a file");		
	console.log("Enter 7 to exit");			
    StartFile();
}

var StartFile = () =>{
	rl.question("Enter your choies:",(ans) =>{
		if(ans == "1"){
			createFileWizard();
		}
		else if(ans == "2"){
			readToFileWizard();
		}
		else if(ans == "3"){
			appendToFileWizard();
		}
        else if(ans == "4"){
			updateTofileWizard();
		}
		else if(ans == "5"){
			renameTofileWizard();
		}
		else if(ans == "6"){
			deleteTofileWizard();
		}
		else if(ans == "7"){
			rl.close();
		}
		else{
			console.log("Wrong choies");
			StartFile();
		}
	})
}


var repeat = () =>{
	instruction();
	StartFile();
}

instruction();
//createFileWizard();