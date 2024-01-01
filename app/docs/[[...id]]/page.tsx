import styles from './style.module.css';
import NewTodoForm from '@/components/NewTodoForm';

const getData = async () => {
    const res = await fetch( "https://dog.ceo/api/breeds/image/random",)
    const data = await res.json()
    return data
}

export default async function DocsPage(){

    const data = await getData();
    console.log(data.message)
    return (<>
    <NewTodoForm />
    <div className={styles.title}>DocsPage</div>
    </>)
}

