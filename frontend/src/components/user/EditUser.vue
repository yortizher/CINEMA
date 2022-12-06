<script setup>
import {  ref, onMounted, computed,reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minValue, numeric,alpha, helpers } from '@vuelidate/validators'
import { useRouter, useRoute } from 'vue-router'

const {params } = useRoute();

const user_id = ref(params.id)

const formUser = ref({
  name: "",
  lastname: "",
  cc: "",
  address:"",
  phone: "",
  email: "",
}); 


const getUser = () => {
   const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/user"
   fetch(urlData)
   .then(resp => resp.json())
  .then(data => formUser.value = data.find(d => d.id == user_id.value) )
}

onMounted(()=> {
	getUser();
});
const rules = computed (() =>{
  return {  
    name: { 
      required:helpers.withMessage("El campo nombre es obligatorio", required ), 
    },
    lastname: {
       required:helpers.withMessage("El campo apellido es obligatorio", required ) 
    },
    cc: { 
      required:helpers.withMessage("El campo documento es obligatorio", required ), 
    },
    address: {
       required:helpers.withMessage("El campo dirección es obligatorio", required ) 
    },
    phone: {
       required:helpers.withMessage("El campo teléfono es obligatorio", required ) 
    },
     email: {
       required:helpers.withMessage("El campo email es obligatorio", required ) 
    }
  }
});

// inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formUser)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    editUser();
  } else {
    messageError("Verifique que todos los campos este llenos");
  }
};

const message = (position, title, text, time) => {
  Swal.fire({
    position: position,
    icon: "success",
    title: title,
    text: text,
    showConfirmButton: false,
    timer: time,
  });
};

const messageError = ( text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};
const editUser = async () => {
  const formData = new FormData();
  formData.append("name", formUser.value.name);
  formData.append("lastname", formUser.value.lastname);
  formData.append("cc",formUser.value.cc);
  formData.append("address", formUser.value.address);
  formData.append("phone", formUser.value.phone);
  formData.append("email", formUser.value.email);


  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/user/${user_id.value}`;

  await fetch(urlDB, {
      method: "PUT",
      body: formData,
    })
      .then((response) => response)
      .then((response) => {
        message(
          "center",
          "Actualización completada",
          "Se ha actualizado correctamente el usuario",
          1500
        );
        console.log(response)
      })
	  .then((data) => {
		console.log(data)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
};


</script>
<template>
	<div class="container">
	  <div class="row d-flex justify-content-center container-main">
		  <div class="col-12 col-md-8 col-lg-6 col-xl-5">
			  <div class="container-form py-3 px-2">
				  <h2 class="text-center mb-3 mt-2 h2 text-white">Editar Cliente</h2>
				  <div class="division">
					  <hr class="line">
				  </div>
				  <form class="form">
					  <div class="form-group">
						  <input type="text" class="form-control" placeholder="Nombre" v-model="formUser.name">
						  <span v-for="error in v$.name.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
					   <div class="form-group">
						  <input type="text" class="form-control" placeholder="Apellido" v-model="formUser.lastname">	
						  <span v-for="error in v$.lastname.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
					  <div class="form-group">
						  <input type="text" class="form-control" placeholder="Documento" v-model="formUser.cc">
						  <span v-for="error in v$.cc.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
					  <div class="form-group">
						  <input type="text" class="form-control" placeholder="Dirección" v-model="formUser.address">
						  <span v-for="error in v$.address.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
					   <div class="form-group">
						  <input type="text" class="form-control" placeholder="Teléfono" v-model="formUser.phone">
						  <span v-for="error in v$.phone.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
					  <div class="form-group">
						  <input type="email" class="form-control" placeholder="Email" v-model="formUser.email">
						  <span v-for="error in v$.email.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
						</div>
						<div class="form-group buttons mt-3">
							<button type="button" class="btn btn-block btn-success btn-lg mx-auto" @click="submitForm()">
							  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
								  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
								  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
							  </svg>
							  Guardar
						  </button>
					  </div>
				  </form>
			  </div>
		  </div>
	  </div>
  </div>
  </template>
  <style scoped>
.container-main {
	margin-top: 5rem;
}
  .container-form{
	  border: none;
	  border-top: 5px solid  var(--medium_purple);
	  background: var(--space_cadet);
	  color: var(--purple_navy);
	  margin-top: 8%;
  }
  
  .division{
	  float: none;
	  position: relative;
	  margin: 30px auto 20px;
	  text-align: center;
	  width: 100%;
	  box-sizing: border-box;
  }
  .division .line{
	  border-top: 2px solid var(--purple_navy);
	  margin: 2rem;
  }
  
  .form{
	  padding: 0 25px 0 33px;
  }
  .form-group {
	margin-bottom: 20px;
  }
  .form-control{
	  border: 1px solid var(--purple_navy);
	  border-radius: 3px;
	  background: var(--space_cadet);
	  letter-spacing: 1px;
	  color: var(--light_gray);
  }
  .form-control:focus{
	  border: 1px solid  var(--medium_purple);
	  border-radius: 3px;
	  box-shadow: none;
	  background: var(--space_cadet);
	  color: var(--white);
	  letter-spacing: 1px;
  }
  .buttons {
	  display: flex;
	  justify-content:space-between;
  }
  .bn{
	  text-decoration: underline;
  }
  .bn:hover{
	  cursor: pointer;
  }
  
  .btn {
	  border: none;
	  border-radius: 5px;
	  margin: 1rem 0;
  }
  
  .btn:focus{
	  box-shadow: none;
	  border: none;
  } 
  
  
  @media(min-width: 767px){
	  .bn{
		  text-align: right;
	  }
  }
  @media(max-width: 767px){
	  .bn{
		  text-align: center;
		  align-items: center;
	  }
  }
  @media(max-width: 450px){
	  .division .line{
		  width: 50%;
	  }
  }
  </style>