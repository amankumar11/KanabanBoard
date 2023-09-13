# Zuddl Assignment

## <b>1. Creating a new category and editing an existing category</b>

We can use the '+' button at the extreme right to create a new Section.
A post request can be sent to, something like:

    axios.post('https://api.zuddlassignment.com/section/add', section);

The section data array can be:

```javascript
[
  {
    id: newId,
    categoryName: categoryName,
    tasks: [],
  },
];
```

For editing a section , we can add a button to edit a section. The functionality can be handled by a put request.
The request can be like:

    axios.put('https://api.zuddlassignment.com/section/edit', updateSection);

The update section array can be:

```javascript
{
    id: sectionId,
    categoryName: updateCategoryName,
}
```

## Adding comments to an Item

To add comments we need to add a new field comments[] in columnsRawData.
It can be, something like:

```javascript
[
  {
    id: 1,
    name: "Resources",
    taskIds: [
      {
        id: uuidv4(),
        text: "Status component",
        idColumn: 1,
        user: "",
        comment: [
          {
            id: commentId,
            author: userName,
            title: commentTitle,
            postedAt: commentTime,
          },
        ],
      },
    ],
  },
];
```

We can create a button at the bottom of a task to post a comment.
The api request can be like:

    axios.post("https://api.zuddlassignment.com/comment/add", comment);

The comment array can be something like:

```javascript
{
    id: taskId,
    comment: {
        id: commentId,
        author: userName,
        title: commentTitle,
        postedAt: commentTime,
    }
}
```

## Error Handling

We can handle errors use try/catch to handle errors. We can display errors to the user using an error component, that can be triggered at the time an error is encountered.
The error of dragging tasks to an invalid location and dragging it to the same location is handles, giving messages

    "This is not a valid destination" & "Index and destination are same" respectively.
