
      var profileid= '';
      var StudentProfiles;
      const path = "http://localhost:8082";

//profile creation module
   $('#createprofile').click(function(e){
      e.preventDefault()
      let msg = ''
     var firstname = $('#firstname').val()
     var lastname = $('#lastname').val()
     var DOB = $('#DOB').val()
     var SSID = $('#SSID').val()
     var Degree = $('#Degree').val()
     var University = $('#University').val()
      if(!firstname){
         msg = 'First name not be empty'
      }
      else if(!lastname){
         msg = 'Last name not be empty'
      }
      
      else if(!DOB){
         msg = 'DOB not be empty'
      }
      
      else if(!SSID){
         msg = 'SSID not be empty'
      }
      
      else if(!Degree){
         msg = 'Degree field not be empty'
      }
      
      else if(!University){
         msg = 'University field not be empty'
      }
      else {
         msg = 'Successfully Submitted !'
      }
     let profile = {
         "firstname": firstname,
         "lastname": lastname,
         "DOB": DOB,
         "SSID": SSID,
         "Degree": Degree,
         "University":University
     }
     $.post(`${path}/studentprofile`, profile )
     alert(msg)
     location.reload();
   })
//end of the profile creation module 


//get student records 
$(document).ready(function(){
   $.get(`${path}/allprofile`, function(data, status){
      StudentProfiles = data;
      data.forEach(profile => {

         const html = `<tr  id = ${profile._id} class= 'sProfile'><td>${profile.firstname}</td><td>${profile.lastname}</td><td>${profile.DOB}</td><td>${profile.SSID}</td><td>${profile.Degree}</td><td>${profile.University}</td></tr>`
         $('#mytable').append(html)


      });


   })
})
//end of the student records


//select the profile from table 
//start module
$(document).on('click','tr.sProfile', function(){
   $(".contra").removeClass("contra");
   $(this).closest('tr').addClass("contra");
    profileid = $(this).closest('tr').attr('id');

   StudentProfiles.map((p)=>{
         if(p._id === profileid ){
            $('#firstname').val(p.firstname)
            $('#lastname').val(p.lastname)
            $('#DOB').val(p.DOB)
            $('#SSID').val(p.SSID)
            $('#Degree').val(p.Degree)
            $('#University').val(p.University)
      }
    })

});
//end module

//Delete profile module 
$('#deleteprofile').click(function(e){
   e.preventDefault();
   if(!profileid){
     alert('First select the student profile')
   }else{
      $.post(`${path}/studentprofile/${profileid}`,'');
   location.reload()
   }
   
})
//end of delete profile module

// Edit profile
$("#editprofile").click(function(e){
   e.preventDefault();
   if(!profileid){
      alert('First select the student profile')
   }else{
      var firstname = $('#firstname').val()
     var lastname = $('#lastname').val()
     var DOB = $('#DOB').val()
     var SSID = $('#SSID').val()
     var Degree = $('#Degree').val()
     var University = $('#University').val()
     

     let profile = {
         "firstname": firstname,
         "lastname": lastname,
         "DOB": DOB,
         "SSID": SSID,
         "Degree": Degree,
         "University":University
     }
      $.post(`${path}/studentprofile/edit/${profileid}`, profile);
   location.reload()


   }
   
})
