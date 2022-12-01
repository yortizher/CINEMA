<script setup>

import { reactive, ref, onMounted, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required} from "@vuelidate/validators";

const rsp = ref([])

const state = reactive({
    names: "",
    capacity: "",
    desc_location: "",
});

const clear = () => {
  $v.value.$reset() // ayuda a que no este todo en rojo
  state.names= "";
  state.capacity= "";
  state.desc_location= "";
};

const rules = computed(() => {
  return {
    names: {
      required,
    },
    capacity: {
      required,
    },
    desc_location: {
      required,
    },
  };
});

const $v = useVuelidate(rules, state);

console.log($v);

const submitForm = async () => {
  const result = await $v.value.$validate();
  if (result) {
    sendData();   
  } else {
    message1(
      "Verifique que todos los campos este llenos",
    );
  }
};


const sendData = async () => {
  
  const formData = new FormData();
  formData.append("names", state.names);
  formData.append("capacity", state.capacity);
  formData.append("desc_location", state.desc_location);

  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/room`;
  await fetch(urlDB, {
    method: "POST",
    body: formData,
  })
    .then((response) => response)
    .then((data) => {
        console.log(data)
     })
    .catch((error) => {
      console.error("Error:", error);
    });

  message(
    "center",
    "Creación completada",
    "Se ha creado correctamente el registro",
    1500
  );
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
const message1 = ( text,) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};
onMounted(() => {
    sendData();
});
</script>
<template>
  <div class="body " >
    <form @submit.prevent="submitForm()" style="max-width: 40%;max-height:50%">
        <h1 class="title">Crear sala</h1>
      <div class="form-floating mb-3 input">
        <input
          v-model="state.names"
          type="text"
          class="form-control "
          id="floatingInput"
          :class="{ 'is-invalid': $v.names.$error }"
        />
        <label class="label" for="floatingInput">Nombre </label>
        <span
              v-for="error in $v.names.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese un nombre para sala") }}
        </span>
    </div>
      <div class="form-floating input">
        <input
          v-model="state.capacity"
          type="number"
          class="form-control "
          id="floatingInput"
          :class="{ 'is-invalid': $v.capacity.$error }"
        />
        <label class="label" for="floatingInput">Capacidad</label>
        <span
              v-for="error in $v.capacity.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese la capacidad de la sala") }}
        </span> 
    </div>
      <div class="form-floating input">
        <input
          v-model="state.desc_location"
          type="text"
          class="form-control "
          id="floatingInput"
          :class="{ 'is-invalid': $v.desc_location.$error }"
        />
        <label class="label" for="floatingInput">Descripción</label>
        <span
              v-for="error in $v.desc_location.$errors"
              :key="error.$uid"
              class="text-danger"
            >
              {{ (error.$message = "Por favor ingrese una descripción") }}
            </span>
      </div>
      <button class="btn" type="submit" >Guardar</button>
    </form>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
.body{
    justify-content: center;
    text-align: center;
    align-items: center;
    position: relative;
    
   
}
form {
  
  background: rgba(106, 4, 15, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 4, 15, 0.25);
  margin: 5% auto 5%;
  border-radius: 10%;
}
.title{
    font-family: 'Open Sans', sans-serif;
    font-size: 170%;
    font-weight: 800;
    margin-top: 5%;
    margin-bottom: 2%;
    color: white;
}
.label{
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;
    font-weight: 800;
}
.input{
     margin: 6% 4%;
}
</style>