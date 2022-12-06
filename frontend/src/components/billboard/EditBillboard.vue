<script setup>
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

import { useRoomStore } from "@/stores/room.js";
import { storeToRefs } from "pinia";
const dataPinea = useRoomStore(); //no olvidar los parentisis
const { idBillboard } = storeToRefs(dataPinea);

// const rsp = ref([]);
const room = ref([]);
const schedule = ref([]);
const movie = ref([]);
const billboard = ref([]);

const state = reactive({
    room_id: "",
    movie_id: "",
    start_date: "",
    end_date: "",
    price: "",
    schedule_id: "",
});

const clear = () => {

    $v.value.$reset(); // ayuda a que no este todo en rojo
      (state.room_id = ""),
      (state.movie_id = ""),
      (state.start_date = ""),
      (state.end_date = "");
      (state.price = ""),
      (state.schedule_id = "");
};

    
const rules = computed(() => {
  return {
    room_id: {
      required: helpers.withMessage("El campo sala es obligatorio",required),
    },
    movie_id: {
      required: helpers.withMessage("La campo pelicula es obligatorio",required),
    },
    start_date: {required: helpers.withMessage("El campo inicio de fecha es obligatorio",required),
    },
    end_date: {
      required: helpers.withMessage("El campo fin de fecha es obligatorio", required),
    },
    price: {
      required: helpers.withMessage("El campo precio es obligatorio", required),
    },
    schedule_id: {
      required: helpers.withMessage("El campo calendario es obligatorio", required),
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
    message1("Verifique que todos los campos este llenos");
  }
};



const sendData = async () => {
 
  const formData = new FormData();
  formData.append("room_id", state.room_id);
  formData.append("movie_id", state.movie_id);
  formData.append("start_date", state.start_date);
  formData.append("end_date", state.end_date);
  formData.append("price", state.price);
  formData.append("schedule_id", state.schedule_id);

  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/billboard/${idBillboard.value}`;
  await fetch(urlDB, {
    method: "PUT",
    body: formData,
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
      clear();
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  message(
    "center",
    "Actualización completada",
    "Se ha actualizado correctamente el registro",
    1500
  );
  
};


const getBillboard = async() => {
  const urlData =`https://cinema-production-cb13.up.railway.app/api/v1/billboard/${idBillboard.value}`;
    await fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (billboard.value = data));
    state.room_id = billboard.value.room_id;
    state.movie_id = billboard.value.movie_id;
    state.start_date = billboard.value.start_date;
    state.end_date = billboard.value.end_date;
    state.price = billboard.value.price;
    state.schedule_id = billboard.value.schedule_id;

   
};


const getMovie = () => {
  const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/movie";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (movie.value = data));
    console.log(movie.value)
};

const getRoom = () => {
  const urlData =
    "https://cinema-production-cb13.up.railway.app/api/v1/room";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (room.value = data));
    console.log(room.value)
};


const getsChedule = () => {
  const urlData =
    "https://cinema-production-cb13.up.railway.app/api/v1/schedule";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (schedule.value = data));
    console.log(schedule.value)
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

const message1 = (text) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: text,
  });
};



onMounted(() => {
  getBillboard();
  getMovie();
  getRoom();
  getsChedule();

 
});
</script>
<template>
  <div class="container container-main">
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="container-form py-3 px-2">
          <h2 class="text-center mb-3 mt-2 h2 text-white">Actualizar cartelera </h2>
          <div class="division">
            <hr class="line" />
          </div>
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <select
                id="disabledSelect"
                class="form-select"
                v-model="state.room_id"
                
              >
                <option value="" selected disabled>Seleccione sala</option>
                <option
                  v-for="(item, i) in room"
                  :value="item.id"
                  v-text="item.name"
                  :key="i"
                ></option>
              </select>
              <span
                v-for="error in $v.room_id.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group">
              <select
                id="disabledSelect"
                class="form-select"
                v-model="state.movie_id"
                
              >
                <option value="" selected disabled>Seleccione pelicula</option>
                <option
                  v-for="(item, i) in movie"
                  :value="item.id"
                  v-text="item.name"
                  :key="i"
                ></option>
              </select>
              <span
                v-for="error in $v.movie_id.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group">
              <input
                type="date"
                class="form-control"
                placeholder="Fecha inicial"
                v-model="state.start_date"
              />
              <span
                v-for="error in $v.start_date.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group">
              <input
                type="date"
                class="form-control"
                placeholder="Fecha final"
                v-model="state.end_date"
              />
              <span
                v-for="error in $v.end_date.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Precio"
                v-model="state.price"
              />
              <span
                v-for="error in $v.price.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group">
              <select
                id="disabledSelect"
                class="form-select"
                v-model="state.schedule_id"
                
              >
                <option value="" selected disabled>Seleccione horario</option>
                <option
                  v-for="(item, i) in schedule"
                  :value="item.id"
                  v-text="item.id"
                  :key="i"
                ></option>
              </select>
              <span
                v-for="error in $v.schedule_id.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>

            <div class="form-group buttons mt-3">
              <button type="submit" class="btn btn-block btn-success btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check2-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                  />
                  <path
                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                  />
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
.container-form {
  border: none;
  border-top: 5px solid var(--medium_purple);
  background: var(--space_cadet);
  color: var(--purple_navy);
  margin-top: 8%;
}

.division {
  float: none;
  position: relative;
  margin: 30px auto 20px;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}
.division .line {
  border-top: 2px solid var(--purple_navy);
  margin: 2rem;
}

.form {
  padding: 0 25px 0 33px;
}
.form-group {
  margin-bottom: 20px;
}
.form-select,
.form-control {
  border: 1px solid var(--purple_navy);
  border-radius: 3px;
  background: var(--space_cadet);
  letter-spacing: 1px;
  color: var(--light_gray);
}
.form-select:focus,
.form-control:focus {
  border: 1px solid var(--medium_purple);
  border-radius: 3px;
  box-shadow: none;
  background: var(--space_cadet);
  color: var(--white);
  letter-spacing: 1px;
}
.buttons {
  display: flex;
  justify-content: center;
}
.bn {
  text-decoration: underline;
}
.bn:hover {
  cursor: pointer;
}

.btn {
  border: none;
  border-radius: 5px;
  margin: 1rem 0;
}

.btn:focus {
  box-shadow: none;
  border: none;
}

@media (min-width: 767px) {
  .bn {
    text-align: right;
  }
}
@media (max-width: 767px) {
  .bn {
    text-align: center;
    align-items: center;
  }
}
@media (max-width: 450px) {
  .division .line {
    width: 50%;
  }
}
</style>