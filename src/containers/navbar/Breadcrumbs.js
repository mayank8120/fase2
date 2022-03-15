import React from 'react'

import { Link, withRouter } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

const Breadcrumbs = props => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter(x => x);
    return (
        <div>
            <Breadcrumb>



                {pathnames.length > 0 ? (
                    <BreadcrumbItem><Link onClick={() => history.push("/")}>Home</Link></BreadcrumbItem>
                    // <Link onClick={() => history.push("/")}>Home</Link>
                ) : (
                    <></>
                )}

                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    const changed = name.split(" ");

                    for (var i = 0; i < changed.length; i++) {
                        changed[i] = changed[i].charAt(0).toUpperCase() + changed[i].slice(1);
                    }

                    const puttingname = changed.join(" ");

                    return isLast ? (
                        <BreadcrumbItem key={puttingname}>{puttingname}</BreadcrumbItem>
                        // <Typography key={name}>{name}</Typography>
                    ) : (
                        // <Link key={name} onClick={() => history.push(routeTo)}>
                        //     {name}
                        // </Link>

                        // <BreadcrumbItem>{puttingname}</BreadcrumbItem>
                        <BreadcrumbItem><Link key={puttingname} onClick={() => history.push(routeTo)}>{puttingname}</Link></BreadcrumbItem>
                    );
                })}




                {/* <BreadcrumbItem><Link>Home</Link></BreadcrumbItem> */}
                {/* <BreadcrumbItem>BACDSUDIFH</BreadcrumbItem>
                <BreadcrumbItem active>Library</BreadcrumbItem> */}
            </Breadcrumb>
        </div>
    )
}


export default withRouter(Breadcrumbs);
