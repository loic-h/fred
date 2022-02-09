const get = async () => {
  try {
    const res = await fetch('api/sheets');
    return res.json();
  } catch(e) {
    console.log(e);
  }

};

export default {
  get
};
