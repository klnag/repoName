import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import "./style.scss"
import { SchemaTableType } from "../../../types"

export default function SchemaVIew() {
    const [isCreateNewTableView, setIsCreateNewTableView] = useState<boolean>(false)
    const [isAddNewFild, setIsAddNewFild] = useState<boolean>(false)
    const [selectedTable, setSelectedTable] = useState<{tableName: string,i:number}>({tableName: "User",i: 0})
    const [newSchemaName, setNewSchemaName] = useState<string>("")
    // const [newFildData, setNewFildData] = useState<SchemaTableType>({tableName: "",filds: [{name: "", type: "", extentions:[]}]})
    const [newFildData, setNewFildData] = useState<{name: string, type: string, extentions: string[]}>({name: "", type: "", extentions:[]})

    const [schemaTable, setSchemaTable] = useState<SchemaTableType[]>([
        {
            tableName: "User",
            filds: [
                {
                    name: "Uid",
                    type: "Int",
                    extentions: ["@id", "@default(autoincreament)"]
                },
                {
                    name: "sid",
                    type: "Int",
                    extentions: ["@id", "@default(autoincreament)"]
                },
            ]
        },
        {
            tableName: "Post",
            filds: [
                {

                    name: "Pid",
                    type: "Int",
                    extentions: ["@id", "@default(autoincreament)"]
                }
            ]
        },
        {
            tableName: "Comment",
            filds: [
                {

                    name: "Cid",
                    type: "Int",
                    extentions: ["@id", "@default(autoincreament)"]
                }
            ]
        }
    ])
    let { id } = useParams();

    const handleOnAddNewTable = () => {
        setSchemaTable([...schemaTable, {tableName: newSchemaName, filds: [{name: "id", type: "Int", extentions:["@id", "@default(autoincreament)"]}]} ])
        setIsCreateNewTableView(false)
        setNewSchemaName("")
    }

    const handleOnAddNewFild = () => {
        const news = schemaTable
        news[selectedTable.i].filds.push(newFildData)
        setSchemaTable([...news]);
        setIsAddNewFild(false)
        setNewFildData({name: "", type: "", extentions: []})

    }

    const handleOnRemoveFild = (i: number) => {
        const newTable = schemaTable
        newTable[selectedTable.i].filds.splice(i,1)
        setSchemaTable([...newTable])
    }

    const handleOnCancel = () => {
        setIsAddNewFild(false)
        setNewFildData({name: "", type: "", extentions: []})

    }

    const handleOnTableSelet = (i: number) => {
        setSelectedTable({...selectedTable, i: i})
        setIsAddNewFild(false)
        setNewFildData({name: "", type: "", extentions: []})
    }

console.log(newFildData)
  return (
    <div>
        <div className={`main ${isCreateNewTableView && "main_off"}`}>
            <h1>SQL Schema</h1>
            <button onClick={() => setIsCreateNewTableView(true)}>Create Table</button>
            <ul>
                {schemaTable.map((t: SchemaTableType, i: number) => (
                    <li key={i} onClick={() => handleOnTableSelet(i)} className={`${i === selectedTable.i &&"underline"}`}>{t.tableName}</li>
                ))}
            </ul>
            <div className="add_cancel_btn">

            {isAddNewFild ? (
                <div>

                <button onClick={handleOnCancel}>Cancel</button>
                <button onClick={handleOnAddNewFild}>Done</button>
                </div>
                ) : 
            <button onClick={() => setIsAddNewFild(true)}>Add</button>
            }
            </div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Extentions</th>
                    </tr>
                </thead>
                <tbody>
                    {schemaTable[selectedTable.i].filds.map((f,i) => (

                    <tr>
                        <td>
                            {i !== 0 && (
                                <>
                                    <button onClick={() =>handleOnRemoveFild(i)}>X</button>
                                    <button>Edite</button>
                                </>
                            )}
                        </td>
                        <td>{f.name}</td>
                        <td>{f.type}</td>
                        <td>{f.extentions.map((e: string, i: number) => (" " + e))}</td>
                    </tr>
                    ))}
                    {isAddNewFild && (
                        <tr>
                            <td><input type="text" onChange={e => setNewFildData({...newFildData, name: e.target.value})} value={newFildData.name} /></td>
                            <td><input type="text" onChange={e => setNewFildData({...newFildData, type: e.target.value})} value={newFildData.type} /></td>
                            <td>
                                <select name="" id="" onChange={e => !newFildData.extentions.includes(e.target.value) && setNewFildData({...newFildData, extentions: [...newFildData.   extentions,e.target.value]})}>
                                    <option value="" selected disabled hidden>Choose here</option>
                                    <option value="@id">@id</option>
                                    <option value="@default">@default</option>
                                </select>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className={`create_new_table_view ${isCreateNewTableView && "create_new_table_view_om"}`}>
            <label htmlFor="">Table Name:</label>
            <input type="text" value={newSchemaName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewSchemaName(e.target.value)} />
            <div className="btns">
            <button className='cancel_btn' onClick={() => setIsCreateNewTableView(false)}>Cancel</button>
            <button onClick={handleOnAddNewTable}>Create</button>
            </div>
        </div>
    </div>
  )
}
