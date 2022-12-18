import http from "../http-common";

const getAll = (sheetName) => http.get(`/exec?FN=ReadAll&SHEETNAME=${sheetName}`);

const insertRecord = (sheetName,data) => http.get(`/exec?FN=InsertRecord&SHEETNAME=${sheetName}&DATA=${JSON.stringify(data)}`);

export default { getAll,insertRecord };