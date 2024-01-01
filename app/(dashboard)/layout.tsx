import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({children})=>{
    return(<>
    <h1>dashboard</h1>
    <div>
        <NewTodoForm />
    </div>
    <div>{children}</div>
    </>)
}

export default DashboardLayout;
