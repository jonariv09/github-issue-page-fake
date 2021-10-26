

export const CreateIssueScreen = () => {
  return (
    <>
      <div className="container">
        <div class="card container mt-4">
          <div class="card-body">
            
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"> Title </span>
              <input type="text" class="form-control" placeholder="Title example" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group">
              <span class="input-group-text">Comment</span>
              <textarea class="form-control" rows="5" aria-label="With textarea" placeholder="Leave a comment here!"></textarea>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
