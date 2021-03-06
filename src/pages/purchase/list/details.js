var List = new Map([
    ["11", [
        { prop: "approvalNumber", label: "项目编号" },
        { prop: "name", label: "项目名" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "sort", label: "项目分类", class: "color-999" },
        { prop: "userName", label: "负责人", class: "color-999" },
        { prop: "states", label: "审核状态", class: "color-999" },
        { prop: "requestFund", label: "项目经费", class: "color-999" },
    ]],
    ["12",[
        { prop: "projectId", label: "项目编号" },
        { prop: "projectName", label: "项目名" },
        { prop: "userName", label: "负责人", class: "color-999" },
        { prop: "requestDate", label: "请求日期", class: "color-999" },
        { prop: "arrivalFund", label: "到账金额", class: "color-999" },
        { prop: "arrivalDate", label: "到账时间", class: "color-999" },
    ]],
    ["21", [
        { prop: "id", label: "论文编号" },
        { prop: "name", label: "论文名称" },
        { prop: "userName", label: "人", class: "color-999" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "paperType", label: "论文类型", class: "color-999" },
        { prop: "paperSource", label: "论文来源", class: "color-999" },
        { prop: "beginDate", label: "撰写时间", class: "color-999" },
    ]],
    ["22", [
        { prop: "id", label: "著作编号" },
        { prop: "name", label: "著作名称" },
        { prop: "userName", label: "撰写人", class: "color-999" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "publisher", label: "出版社", class: "color-999" },
        { prop: "publishLocation", label: "出版社所在地", class: "color-999" },
        { prop: "workType", label: "著作类型", class: "color-999" },
        { prop: "workSource", label: "著作来源", class: "color-999" },
        { prop: "beginDate", label: "撰写时间", class: "color-999" },
    ]],
    ["23", [
        { prop: "id", label: "科研成果编号" },
        { prop: "name", label: "科研成果名称" },
        { prop: "userName", label: "发明人", class: "color-999" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "characters", label: "研究类别", class: "color-999" },
        { prop: "beginDate", label: "撰写时间", class: "color-999" },
    ]],
    ["24", [
        { prop: "id", label: "专利编号" },
        { prop: "name", label: "专利名称" },
        { prop: "userName", label: "专利所属人", class: "color-999" },
        { prop: "collegeName", label: "归属单位", class: "color-999" },
        { prop: "patentRange", label: "专利范围", class: "color-999" },
        { prop: "applicationDate", label: "申请日期", class: "color-999" },
        { prop: "impowerDate", label: "授权日期", class: "color-999" },
    ]],
    

    ["31", [
        { prop: "id", label: "项目编号" },
        { prop: "name", label: "项目名称" },
        { prop: "userName", label: "负责人", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "level", label: "项目级别", class: "color-999" },
        { prop: "sort", label: "项目类别", class: "color-999" },
        { prop: "beginDate", label: "开始日期", class: "color-999" },
        { prop: "endDate", label: "结束日期", class: "color-999" },
    ]],
    ["32", [
        { prop: "id", label: "论文编号" },
        { prop: "name", label: "论文名称" },
        { prop: "userName", label: "撰写人", class: "color-999" },
        { prop: "collegeName", label: "所属院系", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "state", label: "考核状态", class: "color-999" },
        { prop: "beginDate", label: "发表日期", class: "color-999" },
    ]],
    ["33", [
        { prop: "id", label: "著作编号" },
        { prop: "name", label: "著作名称" },
        { prop: "userName", label: "撰写人", class: "color-999" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "publisher", label: "出版社", class: "color-999" },
        { prop: "publishLocation", label: "出版社所在地", class: "color-999" },
        { prop: "workType", label: "著作类型", class: "color-999" },
        { prop: "workSource", label: "著作来源", class: "color-999" },
        { prop: "beginDate", label: "撰写时间", class: "color-999" },
        { prop: "state", label: "考核状态", class: "color-999" },
    ]],
    ["34", [
        { prop: "id", label: "科研成果编号" },
        { prop: "name", label: "科研成果名称" },
        { prop: "userName", label: "发明人", class: "color-999" },
        { prop: "collegeName", label: "所属学院", class: "color-999" },
        { prop: "descipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "workSource", label: "成果来源", class: "color-999" },
        { prop: "beginDate", label: "撰写时间", class: "color-999" },
        { prop: "state", label: "考核状态", class: "color-999" },
    ]],
    ["35", [
        { prop: "id", label: "专利编号" },
        { prop: "name", label: "专利名称" },
        { prop: "userName", label: "发明人", class: "color-999" },
        { prop: "collegeName", label: "所属院校", class: "color-999" },
        { prop: "patentRange", label: "专利类型", class: "color-999" },
        { prop: "publicDate", label: "公开日期", class: "color-999" },
        { prop: "state", label: "考核状态", class: "color-999" },
        
    ]],

    ["41", [
        { prop: "id", label: "团队编号" },
        { prop: "name", label: "团队名称" },
        { prop: "discipline", label: "学科分类", class: "color-999" },
        { prop: "firstDiscipline", label: "第一学科", class: "color-999" },
        { prop: "userName", label: "负责人", class: "color-999" },
        { prop: "foundingTime", label: "成立时间", class: "color-999" },
       
    ]],

]);

export default {
    List
}


