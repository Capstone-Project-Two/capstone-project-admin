"use client"
import { PostResponseDto } from "@/service/api-types"
import { convertDatasource } from "@/utils/antd-data-helper"
import { Table, TableColumnsType } from "antd"

type Props = {
  posts: Array<PostResponseDto>
}

function ListPosts({ posts }: Props) {
  const columns: TableColumnsType<PostResponseDto> = [
    {
      title: "Username",
      dataIndex: "_id",
      key: "username",
      render: (key) => {
        return (
          posts.filter((post) => post._id === key).map((post: PostResponseDto) => (
            <div key={post._id}>
              {post.patient.username}
            </div>
          ))
        )
      }
    },
    {
      title: "Email",
      dataIndex: "_id",
      key: "email",
      render: (key) => {
        return (
          posts?.filter((post) => post._id === key)?.map((post: PostResponseDto) => (
            <div key={post._id}>
              {post.patient.email}
            </div>
          ))
        )
      }
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body"
    },
  ]
  return (
    <Table
      dataSource={convertDatasource(posts)}
      columns={columns}
    />
  )
}

export default ListPosts