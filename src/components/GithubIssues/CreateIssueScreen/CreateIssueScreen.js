import { useForm } from "hooks/useForm";


export const CreateIssueScreen = () => {

  const [values, handleInputChange] = useForm({ title: '', comment: ''});

  const { title, comment } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="container">
        <div class="card container mt-4">
          <div class="card-body">

            <form onSubmit={handleSubmit}>
            
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"> Title </span>
                <input type="text" class="form-control" placeholder="Title example"
                  name="title"
                  value={title}
                  onChange={handleInputChange}
                />
              </div>

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

            </form>

          </div>
        </div>
      </div>
    </>
  )
}
