
import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import { createNewTask, retriveTaskById, updateTaskById } from '../api/DataRetriveApi';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

function TaskUpdateCreateComponent() {

  const [task, setTask] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(
    () => retriveTask(),
    [id]
  )
  function retriveTask() {
    if (id != -1) {
      retriveTaskById('Tanmay',id)
        .then(
          response => {
            console.log(response.data)
            setTask(response.data)
          }
        )
        .catch(error => console.log(error))
    }
  }
  const validationSchema = Yup.object({
    description: Yup.string().required('task description is required'),
    priority: Yup.string().required('task priority is required'),
    status: Yup.string().required('task status is required'),
});

  function onSubmit(values) {
    console.log()
    if (id == -1) {
      const task = {
        id:-1,
        description:values.description,
        skill:values.skill,
        priority:values.priority,
        targetDate:values.targetDate,
        status:values.status

      }
      console.log(task)
      createNewTask('Tanmay',task)
        .then(response => {
          // console.log(response)
          navigate('/tasks')
        })
        .catch(error => console.log(error))
    } else {
      updateTaskById('Tanmay',id, values)
        .then(response => {
          // console.log(response)
          navigate('/tasks')
        })
        .catch(error => console.log(error))
    }


  }

  return (
    <div className='container'>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        >
        {
          (props) => (
            <Form>
              <div className="task-details">
                <fieldset>
                  <h3>Task Description
                  </h3>
                  <Field type='text' name='description' />
                  <ErrorMessage name="description" component="div" className="text-danger" />
                </fieldset>
                <div className="info-grid">
                  <div className="info-column">
                    <fieldset>
                      <p>
                        Skill:
                      </p>
                      <Field type='text' className="form-control" name='skill' />
                    </fieldset>
                    <fieldset >
                      <p>
                        Status:
                      </p>
                      <Field type='text' className="form-control" name='status' />
                      <ErrorMessage name="status" component="div" className="text-danger" />
                    </fieldset>
                  </div>
                  <div className="info-column">
                    <fieldset>
                      <p>
                      Priority:
                      </p>
                      <Field type='text' className="form-control" name='priority' />
                      <ErrorMessage name="priority" component="div" className="text-danger" />

                    </fieldset>
                  </div>
                  <div className="info-column">
                    <fieldset>
                      <p>
                        Target Date:
                      </p>
                      <Field type='date' className="form-control" name='targetDate' />
                    </fieldset>
                  </div>
                  <div className="info-column">
                    
                  </div>
                </div>



              </div>


              <div>
                <button type="submit" className="btn btn-success m-5">
                  {(id == -1) ? "Create new Task" : "Update"}
                </button>
              </div>

            </Form>

          )
        }


      </Formik>
    </div>

  );
}

export default TaskUpdateCreateComponent;

