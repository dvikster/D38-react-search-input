import React, {Component, PropTypes} from 'react'

export default class MVC extends Component{
    //дефолтное состояние инпута
    state={
        inputValue: ''
    }
    //значение вводимое в инпут
    onChangeHandler = (e)=> {
        this.setState({inputValue: e.target.value})
    }

    render(){
        //выводимый массив
        let mvcLibrary =[
            {"mvc":"Angular"},
            {"mvc":"React"},
            {"mvc":"Angular 2"}
        ];
        //обработтка вводимого значения в инпут
        let inputValueLet = this.state.inputValue.trim().toLowerCase();

        //фильтрация массива согласно введенного значения (обрабатывае и возвращает массив отфильтрованыx данных)
        if(inputValueLet.length>0){
            mvcLibrary = mvcLibrary.filter(function (letters) {
                return letters.mvc.toLowerCase().match( inputValueLet )
            });
        }

        return(
           <div>
               <h1>MVC</h1>
               <form className="form-inline">
                   <div className="form-group">
                       <input
                           className='form-control'
                           value={this.state.inputValue}
                           onChange={this.onChangeHandler}
                           defaultValue=''
                           placeholder='Get a MVC'
                       />
                                  </div>
               </form>
               {/*вывод массива изначально всего, а потом с отфильтрованного массива mvcLibrary */}
               <ul>
                   { mvcLibrary.map(function (letters) {
                        return (
                         <li className="mvc_item" key={letters.mvc}>{letters.mvc}</li>
                        )}
                   )}
               </ul>
               </div>
        )
    }
}
