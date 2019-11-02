# F3W2

1. **Monday**
  - [Link to solution](https://github.com/Obaydahm/F3W2/tree/master/mon-wed/src/01monday)
    
2. **Tuesday**
  - [Link to solution](https://github.com/Obaydahm/F3W2/tree/master/mon-wed/src/02tuesday)
    
    - **What is the purpose of the key value, which must be given to individual rows in a react-list**
    
      To help React identify which has been added, modified or deleted.
    - **It's recommended to use a unique value from your data if available (like an ID). How do you get a unique value in a map callback, for data without a unique id?**
    
      You can use indexes, however this is not an optimal solution since orders can change.
    - **What is the difference(s) between state and props?**

      State's are data maintained inside component. Their owned by the component itself, and can only be changed by using the setState functionn.
      Whenever a state changes the component gets re-rendered.
      
      Props on the other hand are data passed in by the parent. They're immutable which means that they cannot change. Props can only be passed from a parent to a child, and not the other way around. However a function can be passed to a child as a prop.
    - **For which scenarios would you use props, and for which would you use state?**
    
      If something had to change dynamically you would use state.
      
      If data had to be passed through components you would use props.
    - **Where is the only place you can set state directly as in:  this.state = {name: "Peter"};**
      
      In the "constructor"/useState.
    - **How must you set state all other places?**

    
3. **Wednesday**
  - [Link to solution](https://github.com/Obaydahm/F3W2/tree/master/mon-wed/src/03wednesday)
  
    - **In a Controlled Component React state is made the "Single source of truth", so how:**
    - **Do we ensure that input controls like text, textarea or select always presents the value found in the components state?**
      
      By assigning the belonging state property as the value of the input.
    - **Do we ensure that a controls state, always matches the value found in an input control?**
    
      By creating a function which handles the input, and then pass it through an OnChange event-handler. That way every time a input value changes it updates the state property.
    - **What is the purpose of doing event.preventDefault() in an event handler?**
    
      By default, when a submit button is pressed the data gets sent to the server,
            and by using preventDefault() we disable that.
    - **What would be the effect of NOT doing event.preventDefault in a submit handler**
    
      A request containing the input data would have been made to the server.
    - **Why don't we want to submit the traditional way, in a single page application?**
    
      Because the purpose of a SPA is to re-render the necessary parts of a given web application, and not the entire page. And by submitting the traditional way, the entire page will reload.
    - **Explain in words what it takes to implement the "Controlled Component" pattern for a form**
      
      By making the react component that renders that form also control what happens in that form.


  
    
4. **Thursday**
  - [Link to solution](https://github.com/Obaydahm/F3W2/tree/master/04thursday)
  
*I haven't been able to complete the entire week's assignments, because I have been very busy this week. I will pick up the rest next weekend.*
