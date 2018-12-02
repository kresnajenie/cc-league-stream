
<template>
<div align="center">
<form
  align="left"
  id="app"
  action="localhost:8080"
  method="post"
  novalidate="true"
>
    <h1>
      Bilée
      <small class="text-muted">by Kresna Jenie</small>
    </h1>
    <p>
    <label >Teks</label>
    <input
      id="text"
      v-model="updateText.text"
      type="text"
      name="text"
    >
  </p>
      <p>
    <label>Nama File</label>
    <v-select
      id="file_name"
      v-model="updateText.filename" :options="['Performer','School']"
      type="text"
      name="file_name"
    ></v-select>
  </p>

  <p>
    <input
      type="submit"
      class="btn btn-success"
      value="Submit"
      @click="writingFile"
    >
  </p>
  <footer >

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3">© Copyright 2018, Kresna Jenie. All Rights Reserved
  </div>
  <!-- Copyright -->

</footer>

</form>
</div>
</template>

<script>
import axios from 'axios'
import vSelect from 'vue-select'

export default{
  components: {
    'v-select': vSelect
  },
  data () {
    return {
      updateText: [
        { 'text': '', 'filename': '' }
      ],
      errors: []
    }
  },

  methods: {
    writeFile (text, filename) {
      // return this.execute('get', `/writeFile?text=${text}&filename=${filename}`)
      axios
        .get('http://localhost:3000/writeFile?text=' + this.updateText.text + '&filename=' + this.updateText.filename)
        .then(response => (this.info = response))
    },
    writingFile: function () {
      this.writeFile(this.updateText.text, this.updateText.filename)
    }
  }
}
</script>

<style>
  input[type=text], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
  input[type=email], select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
  input[type=number], select {
    width: 10%;
    padding: 12px 20px;
    margin: 8px 10px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

form {
    width: 50%;
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
}
</style>
