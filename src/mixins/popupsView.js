export default {
  data() {
    return {
      isPopup: false,
      isEdit: false
    };
  },
  methods: {
    closeDescPopup() {
      this.isPopup = false;
    },
    closeEdit() {
      this.isEdit = false;
    },
    saveEdit(value) {
      this.isEdit = value;
    }
  }
};
