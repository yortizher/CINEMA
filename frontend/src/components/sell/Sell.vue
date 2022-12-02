<script setup>
import { reactive, ref, onMounted, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

const rsp = ref([]);
const billboard = ref([]);
const user = ref([]);

const state = reactive({
  billboard_id: "",
  amount: "",
  user_id: "",
  total: "",
  price: "",
  seats: "",
});

const clear = () => {
  $v.value.$reset(); // ayuda a que no este todo en rojo
  (billboard_id = ""),
    (amount = ""),
    (user_id = ""),
    (total = ""),
    (price = ""),
    (seats = "");
};

const rules = computed(() => {
  return {
    billboard_id: {
      required: helpers.withMessage(
        "El campo cartelera es obligatorio",
        required
      ),
    },
    amount: {
      required: helpers.withMessage(
        "La campo cantidad es obligatorio",
        required
      ),
    },
    user_id: {
      required: helpers.withMessage(
        "El campo usuario es obligatorio",
        required
      ),
    },
    total: {
      required: helpers.withMessage("El campo total es obligatorio", required),
    },
    price: {
      required: helpers.withMessage("El precio total es obligatorio", required),
    },
    seats: {
      required: helpers.withMessage(
        "El campo cantidad sillas es obligatorio",
        required
      ),
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
  formData.append("billboard_id", state.billboard_id);
  formData.append("amount", state.amount);
  formData.append("user_id", state.user_id);
  formData.append("total", state.total);
  formData.append("price", state.price);
  formData.append("seats", state.seats);

  const urlDB = `https://cinema-production-cb13.up.railway.app/api/v1/sell`;
  await fetch(urlDB, {
    method: "POST",
    body: formData,
  })
    .then((response) => response)
    .then((data) => {
      console.log(data);
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

const getBillboard = () => {
  const urlData =
    "https://cinema-production-cb13.up.railway.app/api/v1/billboard";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (billboard.value = data));
};

const getUser = () => {
  const urlData = "https://cinema-production-cb13.up.railway.app/api/v1/user";
  fetch(urlData)
    .then((resp) => resp.json())
    .then((data) => (user.value = data));
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
</script>
<template>
  <div class="container my-5">
    <div class="row d-flex justify-content-center mt-5">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="container-form py-3 px-2">
          <h2 class="text-center mb-3 mt-2 h2 text-white">Registrar salas</h2>
          <div class="division">
            <hr class="line" />
          </div>
          <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
              <select class="form-select" aria-label="Default select example">
                <option value="1" v-text="billboard_id"></option>
              </select>
              <input
                type="text"
                class="form-control"
                placeholder="Nombre"
                v-model="state.billboard_id"
              />
              <span
                v-for="error in $v.billboard_id.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>
            <div class="form-group">
              <input
                type="number"
                class="form-control"
                placeholder="Capacidad "
                v-model.number="state.capacity"
              />
              <span
                v-for="error in $v.capacity.$errors"
                .key="error.$uid"
                style="color: FireBrick"
                >{{ error.$message }}</span
              >
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Descripción"
                v-model="state.desc_location"
              />
              <span
                v-for="error in $v.desc_location.$errors"
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
              <button type="submit" class="btn btn-block btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                  />
                  <path
                    d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                  />
                </svg>
                Consultar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
  justify-content: space-between;
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