import{d,cv as p,bs as w,ct as k,z as r,i as v,o as _,c as g,h as y,cy as S,cw as $,$ as h}from"./index-KP_OAqI5.js";import{_ as x}from"./workflow.vue_vue_type_script_setup_true_lang-PmdqFWru.js";import"./Grid-D4q1Pq5a.js";import"./DescriptionsItem-Q6F3Fays.js";import"./index-C_NlF1cd.js";const D=d({name:"workflow_form_copy",__name:"index",setup(T){const s=p(),c=w(),n=k(),a=r(!1),l=String(c.query.id),e=r({workflowName:`Workflow ${new Date().getTime()}`,workflowStatus:1,blockStrategy:1,description:void 0,executorTimeout:60}),u=async()=>{a.value=!0;const{data:t,error:o}=await S(l);o||(e.value=t),a.value=!1};v(()=>{s.clear(),s.setType(0),u()});const i=async()=>{var o;const{error:t}=await $(e.value);t||((o=window.$message)==null||o.info(h("common.addSuccess")),n.push("/workflow/task"))},f=()=>{n.push("/workflow/task")};return(t,o)=>(_(),g(y(x),{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),spinning:a.value,onSave:i,onCancel:f},null,8,["modelValue","spinning"]))}});export{D as default};
