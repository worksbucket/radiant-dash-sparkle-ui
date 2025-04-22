
import { useDraggable } from "@dnd-kit/core";
import { Task } from "./types";
import { Badge } from "@/components/ui/badge";

interface KanbanTaskProps {
  task: Task;
}

const KanbanTask = ({ task }: KanbanTaskProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 hover:bg-red-100";
      case "medium": return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "low": return "bg-green-100 text-green-800 hover:bg-green-100";
      default: return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className={`bg-white p-4 rounded-lg shadow-sm border cursor-move 
        transition-all duration-200 hover:shadow-md 
        ${isDragging ? 'opacity-50 shadow-lg scale-105' : 'opacity-100'}
        animate-fade-in`}
    >
      <h4 className="font-medium mb-2">{task.title}</h4>
      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
      <Badge className={`${getPriorityColor(task.priority)} font-normal`}>
        {task.priority}
      </Badge>
    </div>
  );
};

export default KanbanTask;
