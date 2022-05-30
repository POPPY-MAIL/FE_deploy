export const postBoxFetchRequest = () => {
  const access = localStorage.getItem("access");

  fetch("https://poppymail.shop/mailbox/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        if (res.status === 401) throw Error(res);
      }
      return res.json();
    })
    .then((res) => {
      // console.log(res);
      if (res.detail === "Given token not valid for any token type")
        localStorage.clear();
      else {
        localStorage.removeItem("sender0");
        localStorage.removeItem("sender1");
        localStorage.removeItem("sender2");
        localStorage.removeItem("sender3");
        localStorage.removeItem("1st_link_title");
        localStorage.removeItem("1st_mailbox_link");
        localStorage.removeItem("1st_number_letter");
        localStorage.removeItem("1st_open_date");
        localStorage.removeItem("1st_id");
        localStorage.removeItem("2nd_link_title");
        localStorage.removeItem("2nd_mailbox_link");
        localStorage.removeItem("2nd_number_letter");
        localStorage.removeItem("2nd_open_date");
        localStorage.removeItem("2nd_id");
        localStorage.removeItem("3rd_link_title");
        localStorage.removeItem("3rd_mailbox_link");
        localStorage.removeItem("3rd_number_letter");
        localStorage.removeItem("3rd_open_date");
        localStorage.removeItem("3rd_id");
        localStorage.removeItem("4th_link_title");
        localStorage.removeItem("4th_mailbox_link");
        localStorage.removeItem("4th_number_letter");
        localStorage.removeItem("4th_open_date");
        localStorage.removeItem("4th_id");
        localStorage.removeItem("5th_link_title");
        localStorage.removeItem("5th_mailbox_link");
        localStorage.removeItem("5th_number_letter");
        localStorage.removeItem("5th_open_date");
        localStorage.removeItem("5th_id");

        // RefreshRequest(res, refresh);
        // console.log(res);

        // var step;
        // for (step = 0; step < res.length; step++) {
        //   localStorage.setItem("1st_link_title", res[0].link_title);
        //   localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
        //   localStorage.setItem("1st_number_letter", res[0].number_of_letter);
        //   localStorage.setItem("1st_open_date", res[0].open_date);
        //   localStorage.setItem("1st_id", res[0].id);
        // }

        if (res[0]) {
          localStorage.setItem("1st_link_title", res[0].link_title);
          localStorage.setItem("1st_mailbox_link", res[0].mailbox_link);
          localStorage.setItem("1st_number_letter", res[0].number_of_letter);
          localStorage.setItem("1st_open_date", res[0].open_date);
          localStorage.setItem("1st_id", res[0].id);

          localStorage.setItem("check_mailbox_today", res.check_mailbox_today);
        }

        if (res[1]) {
          localStorage.setItem("2nd_link_title", res[1].link_title);
          localStorage.setItem("2nd_mailbox_link", res[1].mailbox_link);
          localStorage.setItem("2nd_number_letter", res[1].number_of_letter);
          localStorage.setItem("2nd_open_date", res[1].open_date);
          localStorage.setItem("2nd_id", res[1].id);
        }

        if (res[2]) {
          localStorage.setItem("3rd_link_title", res[2].link_title);
          localStorage.setItem("3rd_mailbox_link", res[2].mailbox_link);
          localStorage.setItem("3rd_number_letter", res[2].number_of_letter);
          localStorage.setItem("3rd_open_date", res[2].open_date);
          localStorage.setItem("3rd_id", res[2].id);
        }

        if (res[3]) {
          localStorage.setItem("4th_link_title", res[3].link_title);
          localStorage.setItem("4th_mailbox_link", res[3].mailbox_link);
          localStorage.setItem("4th_number_letter", res[3].number_of_letter);
          localStorage.setItem("4th_open_date", res[3].open_date);
          localStorage.setItem("4th_id", res[3].id);
        }

        if (res[4]) {
          localStorage.setItem("5th_link_title", res[4].link_title);
          localStorage.setItem("5th_mailbox_link", res[4].mailbox_link);
          localStorage.setItem("5th_number_letter", res[4].number_of_letter);
          localStorage.setItem("5th_open_date", res[4].open_date);
          localStorage.setItem("5th_id", res[4].id);
        }
      }
    })
    .catch((err) => localStorage.clear());
};
