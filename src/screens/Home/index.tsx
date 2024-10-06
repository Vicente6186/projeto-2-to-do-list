import Header from "@components/Header";
import {  Container, Counter, Form, TaskContainer, Tasks, TasksList, TextCreated, TextDone } from "./sytles";
import Input from "@components/Input";
import Button from "@components/Button";
import { useState } from "react";
import TaskItem from "@components/TaskItem";
import ListEmptyComponent from "@components/ListEmptyComponent";
import { Alert } from "react-native";

export type TaskType = {
    id: number;
    content: string;
    checked: boolean;
}

export default function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([]);
    const [content, setContent] = useState('');
    const checkedTasksLength = tasks.filter(task => task.checked).length;

    function handleStoreTask() {
        if(!content) return Alert.alert('Digite alguma coisa!');
       const newTask = {
        id: Date.now(),
        content,
        checked: false,
       }

       setTasks(prevState => [...prevState, newTask]);
       setContent('');
    }

    function handleChangeCheckbox(id: number) {
        setTasks(prevState => prevState.map(task => {
            if (task.id === id) return {...task,checked: !task.checked }
            return task;
        }))
    }

    function handleRemoveTask(id: number) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      }
    

    return (
        <Container>
            <Header />
            <Form>
                <Input 
                placeholder="Adicione uma nova tarefa" 
                style={{ flex: 1 }} value={content} 
                onChangeText={setContent}
                onSubmitEditing={handleStoreTask}
               returnKeyType="done"/>
                <Button variant="STORE" onPress={handleStoreTask} />
            </Form>

            <Tasks>
                <TaskContainer>
                    <TextCreated>Criadas</TextCreated>
                    <Counter>{tasks.length}</Counter>
                </TaskContainer>
                <TaskContainer>
                    <TextDone>Concluídas</TextDone>
                    <Counter>{checkedTasksLength}</Counter>
                </TaskContainer>
            </Tasks>

            <TasksList
                data={tasks}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item, index }) => 
                <TaskItem content={item.content} checked={tasks[index].checked} 
                onPressCheckbox={() => handleChangeCheckbox(item.id)} onPressDestroy={() => handleRemoveTask(item.id)}/>}
                ListEmptyComponent={<ListEmptyComponent />}
            />
        </Container>
    );
}