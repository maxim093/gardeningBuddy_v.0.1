<template>
  <div class="RaisedBed">
    <div class="RaisedBed">
      <label for="">Breite</label>
      <input type="text" v-model="cells" />
      <label for="">Länge</label>
      <input type="text" v-model="rows" />
      <button @click="createElement">Hinzufügen</button>
    </div>
    <section></section>
    <table></table>
  </div>
</template>

<script>
export default {
  methods: {
    generateTable(table, rows, cells) {
      this.counter++;
      if (this.counter > 2) {
        this.resetTable(table);
      }

      let row;
      for (let i = 0; i < rows; i++) {
        row = table.insertRow();
        for (let i = 0; i < cells; i++) {
          row.insertCell();
        }
      }
    },
    resetTable(table) {
      while (table.firstChild) {
        table.removeChild(table.firstChild);
      }
    },
    createElement() {
      const el = document.createElement("div");
      el.className = "element";
      el.draggable = true;

      document.querySelector("section").appendChild(el);
    },
    startDrag(event, item) {
      console.log(item);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("itemID", item.id);
    },
  },
  data() {
    return {
      rows: 0,
      cells: 0,
      counter: 0,
      bed: [],
      element: null,
    };
  },
  updated() {
    let table = document.querySelector("table");
    this.generateTable(table, this.rows, this.cells);
  },
};
</script>

<style lang="scss">
.RaisedBed {
  padding: 50px;
  tr,
  td {
    border: 1px solid black;
  }

  table {
    padding: 5px;
    border: 1px solid black;
  }

  td {
    height: 50px;
    width: 50px;
    border-radius: 100vh;
  }

  section {
    display: grid;
    border: 10px solid red;

    div {
      background: coral;
      margin: 20px;
      height: 50px;
      width: 50px;
    }
  }
}
</style>
