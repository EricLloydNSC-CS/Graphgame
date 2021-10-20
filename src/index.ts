import {TemplatesObject} from "logimat";
import {createObject, finalize, getVal, setMut, setVal, setValAction} from "./modules/object";

export const templates: TemplatesObject = {
    createObject,
    setMut,
    getVal,
    setVal,
    setValAction,
    finalize
};