export const Copy = (item_mailbox_link, e) => {
  e.preventDefault();
  copyToClipboard(item_mailbox_link);
  alert("우체통 링크가 복사되었습니다!");
};

const copyToClipboard = (val) => {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};
