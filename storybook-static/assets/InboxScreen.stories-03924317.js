import{j as s,a as o}from"./Task.stories-89f25132.js";import{r as g}from"./index-f1f749bf.js";import{u as f,a as x,f as k,T as v,P as y,s as T,M as b,w as E,b as S,c as I,d as i}from"./TaskList.stories-4094d971.js";import{a as u}from"./index-cb54f540.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-078d3f98.js";import"./index-d475d2ea.js";import"./index-1e115b9c.js";import"./index-356e4a49.js";function w(){const t=f(),{error:e}=x(a=>a.taskbox);return g.useEffect(()=>{t(k())},[]),e?s("div",{className:"page lists-show",children:o("div",{className:"wrapper-message",children:[s("span",{className:"icon-face-sad"}),s("p",{className:"title-message",children:"Oh no!"}),s("p",{className:"subtitle-message",children:"Something went wrong"})]})}):o("div",{className:"page lists-show",children:[s("nav",{children:s("h1",{className:"title-page",children:"Taskbox"})}),s(v,{})]})}w.__docgenInfo={description:"",methods:[],displayName:"InboxScreen"};const R={component:w,title:"InboxScreen",decorators:[t=>s(y,{store:T,children:t()})],tags:["autodocs"]},r={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,e,a)=>e(a.json(b.tasks)))]}},play:async({canvasElement:t})=>{const e=E(t);await S(await e.findByTestId("loading")),await I(async()=>{await i.click(e.getByLabelText("pinTask-1")),await i.click(e.getByLabelText("pinTask-3"))})}},n={parameters:{msw:{handlers:[u.rest.get("https://jsonplaceholder.typicode.com/todos?userId=1",(t,e,a)=>e(a.status(403)))]}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.json(MockedState.tasks));
      })]
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // Waits for the component to transition from the loading state
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    // Waits for the component to be updated based on the store
    await waitFor(async () => {
      // Simulates pinning the first task
      await fireEvent.click(canvas.getByLabelText('pinTask-1'));
      // Simulates pinning the third task
      await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    });
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    msw: {
      handlers: [rest.get('https://jsonplaceholder.typicode.com/todos?userId=1', (req, res, ctx) => {
        return res(ctx.status(403));
      })]
    }
  }
}`,...(h=(l=n.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const W=["Default","Error"];export{r as Default,n as Error,W as __namedExportsOrder,R as default};
//# sourceMappingURL=InboxScreen.stories-03924317.js.map
