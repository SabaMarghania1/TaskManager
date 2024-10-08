import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        translation: {
          myDay: "My Day",
          important: "Important",
          dashboard: "Dashboard",
          searchTask: "Search a task",
          addTask: "Add a Task",
          allTodos: "All Todos",
          importantTasks: "Important Tasks",
          finishedTasks: "Completed Tasks",
          remainingTasks: "Remaining Tasks",
          taskByStatus: "Task By Status",

          // Modal
          importance: "Importance",
          complete: "Complete",
          edit: "Edit",
          delete: "Delete",
        },
      },
      ka: {
        translation: {
          myDay: "ჩემი დავალებები",
          important: "რჩეული",
          dashboard: "ანალიზი",
          searchTask: "მოძებნე დავალება",
          addTask: "დავალების დამატება",
          allTodos: "ყველა დავალება",
          importantTasks: "მნიშვნელოვანი დავალებები",
          finishedTasks: "დასრულებული დავალებები",
          remainingTasks: "დარჩენილი დავალებები",
          taskByStatus: "დავალებების სტატუსი",

          // Modal
          importance: "მნიშვნელოვნებში",
          complete: "შესრულება",
          edit: "განახლება",
          delete: "წაშლა",
        },
      },
    },
  });

export default i18n;
