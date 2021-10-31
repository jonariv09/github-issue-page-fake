import { useDispatch } from 'react-redux';
import { useForm } from "hooks/useForm";
import { createIssue } from 'actions/issues';
import { setNewIssueState } from 'actions/ui';


export const CreateIssueScreen = () => {

  const dispatch = useDispatch();
  const [values, handleInputChange] = useForm({ title: '', comment: ''});

  const { title, comment } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createIssue(title, comment));
    dispatch(setNewIssueState());
  }

  return (
    <>
      <div className="container">
        <div class="card container mt-4">
          <div class="card-body">

            <form onSubmit={handleSubmit}>
            
              <div  className="form-group">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1"> Title </span>
                  <input type="text" class="form-control" placeholder="Title example"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div  className="form-group">
                <div class="input-group">
                  <span class="input-group-text">Comment</span>
                  <textarea class="form-control" rows="5"
                    aria-label="With textarea"
                    placeholder="Leave a comment here!"
                    name="comment"
                    value={comment}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>

              <div  className="form-group mt-3 d-flex justify-content-end">
                <button type="submit" class="btn btn-outline-success btn-sm ms-auto"> Submit new issue </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}
