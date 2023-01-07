import React, { useRef } from 'react';

const NewTodo: React.FC = () => {
    const textInputRef = useRef<HTMLInputElement>(null); //wyjściowa wartość to null, bo na początku nic się nie renderuje, więc ref jeszcze na nic nie wskazuje

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value //dodajemy wykrzynik,
        // żeby TS wiedział, że to jest ok. Bez tego TS nie wie, że conection pomiędzy const textInputRef, początkowo ustawionej na null
        // zostało stworzone.
    }
    return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>ADD Todo</button>

    </form>
    );
};

export default NewTodo;