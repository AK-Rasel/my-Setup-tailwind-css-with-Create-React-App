
import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const studentMarksData = [
        {
          id: 1,
          name: "John",
          math_marks: 85,
          physics_marks: 78,
          chemistry_marks: 92
        },
        {
          id: 2,
          name: "Emily",
          math_marks: 92,
          physics_marks: 85,
          chemistry_marks: 89
        },
        {
          id: 3,
          name: "Michael",
          math_marks: 78,
          physics_marks: 92,
          chemistry_marks: 80
        },
        {
          id: 4,
          name: "Sarah",
          math_marks: 88,
          physics_marks: 79,
          chemistry_marks: 91
        },
        {
          id: 5,
          name: "David",
          math_marks: 76,
          physics_marks: 85,
          chemistry_marks: 87
        },
        {
          id: 6,
          name: "Sophia",
          math_marks: 95,
          physics_marks: 88,
          chemistry_marks: 94
        },
        {
          id: 7,
          name: "James",
          math_marks: 82,
          physics_marks: 76,
          chemistry_marks: 85
        },
        {
          id: 8,
          name: "Olivia",
          math_marks: 90,
          physics_marks: 91,
          chemistry_marks: 88
        },
        {
          id: 9,
          name: "William",
          math_marks: 25,
          physics_marks: 82,
          chemistry_marks: 75
        },
        {
          id: 10,
          name: "Ava",
          math_marks: 87,
          physics_marks: 90,
          chemistry_marks: 84
        }
      ];
      
      // You can use this dataset with math, physics, and chemistry marks for 10 students for your visualization or analysis.
      
      
      // You can use this modified dataset with "id" and "name" to create a line chart for math marks.
      
      // You can use this modified dataset with "id" and "name" to create a line chart for math marks.
      
    return (
        <div>
            <LChart width={600} height={300} data={studentMarksData}>
                <Line  type="monotone" dataKey={'math_marks'} stroke='#160aff'/>
                <Line  type="monotone"  dataKey={'physics_marks'} stroke='#ff8d0a'/>
                <CartesianGrid stroke='#bd1717' />
                <XAxis dataKey={'name'} />
                <YAxis />
            </LChart>
        </div>
    );
};

export default LineChart;