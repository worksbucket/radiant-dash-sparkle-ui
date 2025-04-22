
import { DndContext, DragEndEvent, DragOverEvent, DragStartEvent } from "@dnd-kit/core";
import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import KanbanColumn from "@/components/kanban/KanbanColumn";
import { Task } from "@/components/kanban/types";

const Kanban = () => {
  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    todo: [
      { id: "1", title: "Research competitors", description: "Analyze top 5 competitors", priority: "high" },
      { id: "2", title: "Design mockups", description: "Create initial wireframes", priority: "medium" },
    ],
    inProgress: [
      { id: "3", title: "Implement auth", description: "Set up user authentication", priority: "high" },
    ],
    review: [
      { id: "4", title: "Code review", description: "Review pull request #123", priority: "low" },
    ],
    done: [
      { id: "5", title: "Update docs", description: "Update API documentation", priority: "medium" },
    ],
  });

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = findTask(active.id as string);
    setActiveTask(task);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const activeColumn = findTaskColumn(active.id as string);
    const overColumn = over.id as string;

    if (activeColumn === overColumn) return;

    setTasks(prev => {
      const activeTask = findTask(active.id as string);
      
      return {
        ...prev,
        [activeColumn]: prev[activeColumn].filter(task => task.id !== active.id),
        [overColumn]: [...prev[overColumn], activeTask!]
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveTask(null);
  };

  const findTask = (id: string): Task | null => {
    for (const column in tasks) {
      const task = tasks[column].find(task => task.id === id);
      if (task) return task;
    }
    return null;
  };

  const findTaskColumn = (id: string): string => {
    for (const column in tasks) {
      if (tasks[column].find(task => task.id === id)) return column;
    }
    return "todo";
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Project Board</h1>
        <DndContext onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <KanbanColumn
              title="To Do"
              tasks={tasks.todo}
              type="todo"
            />
            <KanbanColumn
              title="In Progress"
              tasks={tasks.inProgress}
              type="inProgress"
            />
            <KanbanColumn
              title="Review"
              tasks={tasks.review}
              type="review"
            />
            <KanbanColumn
              title="Done"
              tasks={tasks.done}
              type="done"
            />
          </div>
        </DndContext>
      </div>
    </DashboardLayout>
  );
};

export default Kanban;
