export default (type, data, filename) => {
    const blob = new Blob([data], { type });
    const link = document.createElement("a");

    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}