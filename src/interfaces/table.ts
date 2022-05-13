export interface cellType {
    editable: boolean,
    label: string,
    hint?: string,
    icon?: string
}

export interface TProps {
    width?: string,
    height?: string,
    heading: THProps["heading"],
    data: TBProps["data"],
}

export interface THProps{
    heading: Array<string>
}

export interface TBProps{
    data: cellType[][]
}