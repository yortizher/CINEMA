<script setup>
import {  ref, onMounted, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, maxLength, minValue, numeric,alpha, helpers } from '@vuelidate/validators'
import { useRouter, useRoute } from 'vue-router'
  

const router = useRouter();
const {params } = useRoute();

const movie_id = ref(params.id)

const categories = ref([]);

let action = ref(true);
const formMovie = ref({
  name: "",
  img_url: "",
  category_id: "",
  duration: "",
  synopsis:"",
  age_range: "",
});

const getCategories = () => {
   const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/category"
   fetch(urlData)
   .then(resp => resp.json())
   .then(data => categories.value = data )
   console.log(categories)
}
const getMovies = () => {
   const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/movie"
   fetch(urlData)
   .then(resp => resp.json())
   .then(data => formMovie.value = data.find(d => d.id == movie_id.value) )
   console.log(formMovie)
}

onMounted(()=> {
	getMovies();
	getCategories();
});

const rules = computed (() =>{
  return {  
    name: { 
      required:helpers.withMessage("El campo nombre es obligatorio", required )
    },
    category: {
       required:helpers.withMessage("El campo Cateroria es obligatorio", required ) 
    },
	img_url: {
		required:helpers.withMessage("El campo imagen es obligatorio", required )
	},
    duration: { 
      required:helpers.withMessage("El campo duración es obligatorio", required )
    },
    synopsis: {
       required:helpers.withMessage("El campo sinopsis es obligatorio", required ) 
    },
    age_range: {
       required:helpers.withMessage("El campo rango de edad es obligatorio", required ) 
    }
  }
});

// inicializar para ver el la data dentro del componente
const v$ = useVuelidate(rules, formMovie)

const submitForm = async () => {
  const result = await v$.value.$validate();
  if(result) {
    editMovie();
  } else {
    messageError("Verifique que todos los campos este llenos");
  }
};

let img_file = ref("");

const getImage = (e) => {
  let file = e.target.files[0];
  console.log(file);
  formMovie.value.img_url = file;
  showPicture(file);
};

const showPicture = (file) => {
  let reader = new FileReader();

  reader.onload = (e) => {
    img_file.value = e.target.result;
  };
  reader.readAsDataURL(file);
};

const imagenComputed = computed(() => {
  return img_file.value;
});

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

const editMovie = async () => {
	const formData = new FormData();
	formData.append("name", formMovie.value.name);
	formData.append("category_id",formMovie.value.category_id);
	formData.append("img_url",formMovie.value.img_url);
	formData.append("duration", formMovie.value.duration);
	formData.append("synopsis", formMovie.value.synopsis);
	formData.append("age_range", formMovie.value.age_range);


    const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/movie/${movie_id.value}`;
	await fetch(urlDB, {
		method: "PUT",
		body: formData,
		})
		.then((response) => response)
		.then((response) => {
			message(
			"center",
			"Actualización completada",
			"Se ha actualizado correctamente la película",
			1500
			);
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
				<h2 class="text-center mb-3 mt-2 h2 text-white">Editar Película</h2>
				<div class="division">
					<hr class="line">
				</div>
				<form class="form" @submit.prevent="submitForm()">
					<div class="form-group">
    					<input type="text" class="form-control" placeholder="Nombre" v-model="formMovie.name">
						<span v-for="error in v$.name.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
 					<div class="form-group">
    					<select id="disabledSelect" class="form-select" v-model="formMovie.category_id">
						<option value="" selected disabled>Seleccione la Categoria</option>
               			 <option v-for="(item,i) in categories" :value="item.id" v-text="item.name" :key="i"></option>
            			</select>
						<span v-for="error in v$.category.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
					<div class="form-group">
    					<input type="text" class="form-control" placeholder="Duración" v-model.number="formMovie.duration">
						<span v-for="error in v$.duration.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
					<div class="form-group">
    					<input type="text" class="form-control" placeholder="Sinopsis" v-model="formMovie.synopsis">
						<span v-for="error in v$.synopsis.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
 					<div class="form-group">
    					<input type="text" class="form-control" placeholder="Rango de Edad" v-model.number="formMovie.age_range">
						<span v-for="error in v$.age_range.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
  					</div>
					<div class="form-group">
						<input type="file" @change="getImage" class="form-control fancy-file"  name="fileImg" accept="=image/*"/>
						<label>
							<span class="fancy-file__fancy-file-button">
								Examinar Imagen
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open mx-1" viewBox="0 0 16 16">
								<path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"/>
							</svg>
							</span>
							<span class="fancy-file__fancy-file-name">
								<span v-if="formMovie.img_url=== ''">Ninguna Imagen seleccionada</span>
								<span v-else class="fancy-file__fancy-file-name--success">Archivo seleccionado</span>
							</span>
						</label>
					<span v-for="error in v$.img_url.$errors" .key="error.$uid" style="color: FireBrick;">{{error.$message}}</span>
					<div class="mt-3" >
						<figure v-if="formMovie.img_url">
							<img
							:src="formMovie.img_url"
							class="img"
							alt="Imagen seleccionada"
							/>
						</figure>
					</div>
					</div>
  					<div class="form-group buttons mt-3">
  						<button type="submit"  class="btn btn-block btn-success btn-lg mx-auto">
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
.fancy-file{
	position: absolute;
	top: 2px;
	z-index: 1;
	width: 100%;
	height: 100%;
	opacity: 0;
}
.fancy-file + label {
	display: flex;
}
.fancy-file__fancy-file-name,
.fancy-file__fancy-file-button{
	padding: 5px 8px;	
}
.fancy-file__fancy-file-name--success{
	padding: 5px 30px;
}
.fancy-file__fancy-file-name {
  background: var(--space_cadet);
  border: 1px solid var(--purple_navy);
  border-radius: 0 4px  4px 0;
  white-space: nowrap;
}
.fancy-file__fancy-file-button{
	background-color:  var(--purple_navy);
	border: 1px solid  var(--purple_navy);
	color: white;
	border-radius: 4px 0 0 4px;
    white-space: nowrap;
	position: relative;
}
.container-form{
	border: none;
	border-top: 5px solid  var(--medium_purple);
	background: var(--space_cadet);
	color: var(--purple_navy);
	margin-top: 8%;
}
.img {
    width: 50%;
    height: 10rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
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
.form-select,
.form-control{
	border: 1px solid var(--purple_navy);
	border-radius: 3px;
	background: var(--space_cadet);
	letter-spacing: 1px;
    color: var(--light_gray);
}
.form-select:focus,
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
@media(max-width: 450px){
	.division .line{
		width: 50%;
	}
	.img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    transition: all .3s ease-in-out;    
    transform: scale(1);
}

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

</style>