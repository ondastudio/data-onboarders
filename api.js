document.addEventListener("DOMContentLoaded", () => {
  //get raw bytes power
  const getCapacity = () => {
    const textBlock = document.querySelector(".raw_bytes");

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://observable-api.starboard.ventures/network_storage_capacity/total_raw_bytes_power"
    );

    request.send();

    request.addEventListener("load", () => {
      let data = JSON.parse(request.responseText);
      let res = Object.values(data.data).pop();
      let value = Number(
        (res.total_raw_bytes_power / 2 ** 50 / 2 ** 10).toFixed(2)
      );

      if (value) {
        textBlock.innerHTML = value;
      }
    });
  };

  getCapacity();

  //verified verified data
  const getBytes = () => {
    const textBlock = document.querySelector(".active-deals");

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://observable-api.starboard.ventures/api/v1/observable/deal-states-aggregate-daily/active_deals_verified_bytes"
    );

    request.send();

    request.addEventListener("load", () => {
      let data = JSON.parse(request.responseText);
      let res = Object.values(data.data).pop();
      let value = Number(
        (res.active_deals_verified_bytes / 2 ** 50).toFixed(2)
      );

      if (value) {
        textBlock.innerHTML = value;
      }
    });
  };

  getBytes();

  //verified deals
  const getDeals = () => {
    const textBlock = document.querySelector(".recent-deals");

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://observable-api.starboard.ventures/api/v1/observable/deal-states-aggregate-daily/activated_deals_verified_count"
    );

    request.send();

    request.addEventListener("load", () => {
      let data = JSON.parse(request.responseText);
      let res = Object.values(data.data).pop();
      let value = res.activated_deals_verified_count
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      if (value) {
        textBlock.innerHTML = value;
      }
    });
  };

  getDeals();

  //verified verified data
  const getClients = () => {
    const textBlock = document.querySelector(".verified-clients");

    let request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://api.filplus.d.interplanetary.one/api/getVerifiedClients"
    );

    request.send();

    request.addEventListener("load", () => {
      let data = JSON.parse(request.responseText);
      let value = data.count
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      if (value) {
        textBlock.innerHTML = value;
      }
    });
  };

  getClients();
});
