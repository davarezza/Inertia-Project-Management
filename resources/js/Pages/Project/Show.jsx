import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

export default function Show({auth, project}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    {`Project "${project.name}"`}
                </h2>
            }
        >

            <Head title={`Project ${project.name}`} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <img
                            src={project.image_path}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            
                        </div>
                        <div className="flex ml-6 text-white">
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Project ID</label>
                                    <p className="mt-1 text-white">{project.id}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Project Name</label>
                                    <p className="mt-1 text-white">{project.name}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Project Status</label><br />
                                    <span
                                        className={
                                            "px-2 py-1 rounded text-white " +
                                            PROJECT_STATUS_CLASS_MAP[project.status]
                                        }
                                    >
                                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                                    </span>
                                </div>
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Created By</label>
                                    <p className="mt-1 text-white">{project.createdBy.name}</p>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Due Date</label>
                                    <p className="mt-1 text-white">{project.due_date}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Create Date</label>
                                    <p className="mt-1 text-white">{project.created_at}</p>
                                </div>
                                <div className="mb-4">
                                    <label className="font-bold text-lg text-white">Updated By</label>
                                    <p className="mt-1 text-white">{project.updatedBy.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="my-4 ml-6">
                            <label className="font-bold text-lg text-white">Project Description</label>
                            <p className="mt-1 text-white">{project.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Task Table
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}