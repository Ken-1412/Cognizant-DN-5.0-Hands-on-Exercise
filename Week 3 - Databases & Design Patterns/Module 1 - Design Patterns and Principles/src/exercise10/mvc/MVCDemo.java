package exercise10.mvc;

public class MVCDemo {

    public static void main(String[] args) {

        Student model = new Student(
                "Ketan Singh",
                101,
                "A"
        );

        StudentView view = new StudentView();

        StudentController controller =
                new StudentController(model, view);

        System.out.println("Initial Student Details:");
        controller.updateView();

        System.out.println("\nAfter Updating Details:");

        controller.setStudentName("Ketan Singh");
        controller.setStudentGrade("A+");

        controller.updateView();
    }
}