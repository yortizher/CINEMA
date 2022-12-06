<script setup>
import {  ref, onMounted, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minValue, numeric,alpha, helpers } from '@vuelidate/validators'

const formCategory = ref({
  name: "",
}); 

const rules = computed (() =>{
  return {  
    name: { 
      required:helpers.withMessage("El campo nombre es obligatorio", required ), 
    }
  }
});

// inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formCategory)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    RegistrationCategory();
    clear();
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
const RegistrationCategory = async () => {
  const formData = new FormData();
  formData.append("name", formCategory.value.name);

 console.log(formData)
  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/category`;
  await fetch(urlDB, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log(response)
      message(
        "center",
        "Registro completo",
        "Se ha creado correctamente el registro",
        1500
      );
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
}
const clear = () => {
  v$.value.$reset()
  formCategory.value.name = "";
}

</script>
<template>
<div class="container">
	<div class="row d-flex justify-content-center container-main">
		<div class="col-12 col-md-8 col-lg-6 col-xl-5">
			<div class="container-form py-3 px-2">
				<h2 class="text-center mb-3 mt-2 h2 text-white">Registrar Categoria</h2>
				<div class="division">
					<hr class="line">
				</div>
				<form class="form">
					<div class="form-group">
    					<input type="text" class="form-control" placeholder="Nombre" v-model="formCategory.name">
						<span v-for="error in v$.name.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
  					<div class="form-group buttons mt-3">
  						<button type="button" class="btn btn-block btn-success btn-lg" @click="submitForm()">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
								<path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
								<path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
							</svg>
							Guardar
						</button>
						<RouterLink to="/consultCategories" class="btn btn-block btn-primary btn-lg" href="#">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
								<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
								<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
							</svg>
							Consultar
						</RouterLink>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
</template>
<style scoped>
.container-main {
	margin: 5rem auto;
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