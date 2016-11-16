var $ = require('jquery');

var FileModel = require('./models').File;


$(function(){

  $('#profile').on('submit', function(event){
    event.preventDefault();

    console.log($("#pic")[0]);

    var picture = $("#pic")[0].files[0];



    // Option #1 is to use the FormData object
    // User  ______ username, password, avatar
    // var formData = new FormData();
    // formData.append("username", $("#name").val());
    // formData.append("picture", picture);
    //
    // $.post('/dist/', formData);

    // Option #2 is to use backbone Model
    var file = new FileModel();
    file.set('name', picture.name);
    file.set('data', picture);
    file.save().done(function(){
      console.log(file);
      // alert(file.get('url'));
    });
  });

});


/**
 * React example
 */
 // var Comp = React.createClass({
 //   handlePicture: function(e){
 //     var attachedFile = e.target.files[0];
 //     this.setState({profilePic: attachedFile});
 //   },
 //   render: function(){
 //     return (
 //       <form>
 //         <input onChange={this.handlePicture} type="file" />
 //       </form>
 //     )
 //   }
 // });
